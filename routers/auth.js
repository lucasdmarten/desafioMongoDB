const router = require('express').Router();
const { required } = require('@hapi/joi');
const User = require('../model/User');
const {registerValidation, loginValidation} = require('../validation')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', (req,res) => {
    res.json({
        message: "homepage autentication"
    });
});

// # api/user/register
router.post('/register',  async (req,res) => {
    // VALIDATE THE DATA BEFORE CREATE USER
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error,details[0].message);
    
    //CHECK IF USER ALREADY EXISTS
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).json({
        message: 'Email already exists'
    });

    // HASH PASSWORDS
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword
    });
    try {
        const savedUser = await user.save();
        return res.status(200).json(savedUser);
    } catch(error) {
        return res.status(400).json(error);
    }
});

// # api/user/login
router.post('/login', async (req,res) => {
        
    // VALIDATE THE DATA BEFORE CREATE USER
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error,details[0].message);
    
    // CHECK IF USER ALREADY EXISTS
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).json({
        message: 'Email is not exists'
    });

    // PASSWORD IS CORRECT?
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json({
        message: 'Invalid password!'
    });
    console.log("userid embaixo")

    console.log(user._id)
    // CREATE TOKEN
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    res.cookie('acess-token', token, cookieOptions);
    res.cookie('acess-token-id', user._id, cookieOptions);
    res.cookie('acess-token-username', user.username, cookieOptions);
    

    return res.json({
        message: 'Congratulations your token was created! You are connected...',
        token: token
    });


});

module.exports = router;