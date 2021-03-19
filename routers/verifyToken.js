const jwt = require('jsonwebtoken');

module.exports = function(req,res,next) {
    const token = req.cookies['acess-token'];
    console.log(token)

    console.log(req.cookies['acess-token'])


    console.log("token acime")
    if (!token) return res.status(401).json({
        message: 'Acess denied because not has token!'
    });
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next()
    } catch(error) {
        res.status(400).json({
            message: 'Invalid Token!',
            error: error
        });
    }
}