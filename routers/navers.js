const router = require('express').Router();
const Navers = require('../model/Naver');
const Projeto = require('../model/Projeto');
const verify = require('./verifyToken');


router.get('/', verify, function(req, res) {
    Navers.find({})
      .exec(function(err, navers) {
        if(err) {
          res.send('error occured')
        } else {
          console.log(navers);
          res.json(navers);
        }
      });
});

router.get('/show/:username', verify, function(req, res) {
     
    Navers.find({"username":req.params.username}).exec((err,naver)=>{
        if (err) {
            console.log(err)
        } else {
            Projeto.find({username_navers:req.params.username}).exec((err,projetos)=>{
                console.log(projetos[0])
                list_projetos = []
                for (let i = 0; i < projetos.length; i++) {
                    list_projetos.push([
                        {name_projeto:projetos[i].name_projeto,
                        navers: projetos[i].username_navers
                        }
                    ])
                }
                res.json({
                    username:naver[0].username,
                    fullname:naver[0].fullname,
                    projetos: {
                        list_projetos
                    }
                    
                })
            })
        }
    })
      
});

  
router.get('/:username', verify, function(req, res) {
    Navers.findOne({
        username: req.params.username
        })
        .exec(function(err, naver) {
        if(err) {
            res.send('error occured')
        } else {
            res.json(naver);
        }
    });
});

router.post('/create', verify, function(req, res) {
    var newNaver = new Navers();

    newNaver.username = req.cookies['acess-token-username']
    newNaver.fullname = req.body.fullname;
    newNaver.birth_date = req.body.birth_date;
    newNaver.admission_date = req.body.admission_date;
    newNaver.job_role = req.body.job_role;

    console.log("ASODOASDJKO")
    console.log(newNaver.projetos)
    newNaver.save(function(err, naver) {
        if(err) {
            console.log(newNaver)
            console.log(err)
            res.send(' your user already registered a naver');
        } else {
            console.log(naver);
            res.send(naver);
        }
    });
});


router.put('/update/:id', verify, async (req, res) => {
    try {
        const navers = await Navers.findOneAndUpdate({
            _id: req.params.id
            },
            { $set: { fullname: req.body.fullname }},
            {new: true},
            function(err, newNaver) {
                if (err) {
                    res.send('error updating ');
                } else {
                    console.log(newNaver);
                    res.send(newNaver);
                }
            }
        );
    } catch(err) {
        res.send(err);
    }
});


router.delete('/delete/:id', verify, function(req, res) {
Navers.findOneAndRemove({
    _id: req.params._id
}, function(err, naver) {
    if(err) {
    res.send('error removing')
    } else {
    console.log(naver);
    res.status(204);
    }
});
});

module.exports = router;