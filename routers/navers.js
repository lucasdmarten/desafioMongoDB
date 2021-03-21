const router = require('express').Router();
const Navers = require('../model/Navers');
const Projects = require('../model/Projects');
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
            Projects.find({username_navers:req.params.username}).exec((err,projects)=>{
                console.log(projects[0])
                list_projects = []
                for (let i = 0; i < projects.length; i++) {
                    list_projects.push([
                        {name_projects:projects[i].name_project,
                        navers: projects[i].username_navers
                        }
                    ])
                }
                console.log(naver[0])
                res.json({
                    username:naver[0].username,
                    fullname:naver[0].fullname,
                    projects: {
                        list_projects
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

    console.log(newNaver.projects)
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


router.put('/update/', verify, async (req, res) => {
    try {
        const navers = await Navers.findOneAndUpdate({
            username: req.params.username
            },
            { $set: { fullname: req.body.fullname }},
            {new: true},
            function(err, newNaver) {
                if (err) {
                    res.send('error updating ');
                } else {
                    res.send(newNaver);
                }
            }
        );
    } catch(err) {
        res.send(err);
    }
});


router.delete('/delete/', verify, function(req, res) {
Navers.findOneAndRemove({
    username: req.params.username
}, function(err, naver) {
    if(err) {
    res.send('error removing')
    } else {
    console.log(naver);
    res.json({
        message: "deleted"
    });
    }
});
});

module.exports = router;