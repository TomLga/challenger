    const {sign, verify} = require('jsonwebtoken')
    require("dotenv").config

    function createToken(user){
        return sign({
            emailAdd: user.emailAdd, //payload
            userPass: user.userPass  
        }, //key for encryp=
        process.env.SECRET_KEY,
        { //session time 
            expiresIn:'1h'
        })
    }

    module.exports = {
        createToken
    }
    // middleware 
    // function verifyToken(req, res, NEXT){
    //     const token= req.headers["authorization"]
    // }


    /**
     * sign = create a token and sign off the user
     * payload - SERKEY KEY - EXPIRATIOM FOR SESSION 
     * secrate key == allows us to lock and unlock (encrp and decrp) 
     * 
     * NEXT = tells us it is a middleware function (27:30 rec)
     */

