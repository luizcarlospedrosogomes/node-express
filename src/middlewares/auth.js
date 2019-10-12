
const jwt     = require('jsonwebtoken');

module.exports = (req,res,next) =>{
    console.log('auth')
    const authHeader = req.headers.authorization;
    if(!authHeader)
        return res.status(401).send({error: 'sem token'})
    jwt.verify(authHeader , 'tokensecreto', (error, decoded) =>{
        if(error)
            return res.status(401);

        req.userId = decoded.login
    })
    return next();
}