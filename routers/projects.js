const router = require('express').Router();
const Projects = require('../model/Projects');
const Users = require('../model/Users');
const Navers = require('../model/Navers');
const verify = require('./verifyToken');


router.post('/create', verify, async (req,res)=>{
    var newProject = new Projects();

    newProject.name_project = req.body.name_project;
    newProject.username_navers = [req.body.username_navers]
    newProject.save(function(err, project) {
        if(err) {
            console.log(newProject)
            console.log(err)
            res.send({
                message: "error",
                err
            });
        } else {
            console.log(project);
            res.json({
                project
            });
        }
    });
});


router.get('/', verify, (req,res)=>{
    Projects.find({})
      .exec(function(err, projects) {
        if(err) {
          res.send('error occured')
        } else {
          console.log(projects);
          res.json(projects);
        }
      });
});


router.get('/:name_project', verify, (req,res)=>{
    const {name_project} = req.params;
    Projects.findOne({ name_project:  name_project}).then(function (project) {
        res.status(200).json({
            project: project
        });
    });
});

router.put('/update/:name_project', async (req, res) => {
    try {
        const navers = await Projects.findOneAndUpdate({
            name_project: req.params.name_project
            },

            { $set: { name_project: req.body.name_project}},
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

router.put('/add_naver/:name_project', (req, res) => {
    try {
        const navers = Projects.findOneAndUpdate({
            name_project: req.params.name_project
            },
            { $push: { username_navers: req.body.username_navers     }},
            { upsert: true, new: true },
            (err, newNaver) =>{
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



module.exports = router;