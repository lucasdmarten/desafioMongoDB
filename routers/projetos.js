const router = require('express').Router();
const Projeto = require('../model/Projeto');
const User = require('../model/User');
const Naver = require('../model/Naver');
const verify = require('./verifyToken');


router.post('/create', verify, async (req,res)=>{
    var newProjeto = new Projeto();

    newProjeto.name_projeto = req.body.name_projeto;
    newProjeto.username_navers = [req.body.username_navers]
    // console.log(newProjeto.navers)
    newProjeto.save(function(err, projeto) {
        if(err) {
            console.log(newProjeto)
            console.log(err)
            res.send({
                message: "error",
                err
            });
        } else {
            console.log(projeto);
            res.json({
                projeto
            });
        }
    });
});


router.get('/', verify, (req,res)=>{
    Projeto.find({})
      .exec(function(err, projetos) {
        if(err) {
          res.send('error occured')
        } else {
          console.log(projetos);
          res.json(projetos);
        }
      });
});


router.get('/:name_projeto', verify, (req,res)=>{
    const {name_projeto} = req.params;
    Projeto.findOne({ name_projeto:  name_projeto}).then(function (projeto) {
        res.status(200).json({
            projeto: projeto
        });
    });
});

router.put('/update/:name_projeto', async (req, res) => {
    try {
        const navers = await Projeto.findOneAndUpdate({
            name_projeto: req.params.name_projeto
            },

            { $set: { name_projeto: req.body.name_projeto}},
            {new: true},
            (err, newNaver) =>{
                if (err) {
                    res.send('error updating ');
                } else {
                    res.send('update ');
                }
            }
        );
    } catch(err) {
        res.send(err);
    }
});

router.put('/add_naver/:name_projeto', (req, res) => {
    try {
        const navers = Projeto.findOneAndUpdate({
            name_projeto: req.params.name_projeto
            },
            { $push: { username_navers: req.body.username_navers     }},
            { upsert: true, new: true },
            (err, newNaver) =>{
                if (err) {
                    res.send('error updating ');
                } else {
                    res.send('update ');
                }
            }
        );
    } catch(err) {
        res.send(err);
    }
});



module.exports = router;