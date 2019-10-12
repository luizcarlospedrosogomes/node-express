const mongodb = require('mongoose');
const jwt     = require('jsonwebtoken');

module.exports = {
 
    async login(req, res){
        const{login, password} = req.body;
        if(login == 'admin' && password == 'admin'){
            const token = jwt.sign({login:login},'tokensecreto',{expires:86400});
            return res.status(200).send({token: token});
        }
        return res.status(401).send({error: "Not auth"})
    }
}