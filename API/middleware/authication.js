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

    function verifyAToken(req, res, next){
        //To prevent undefined error, place ?. before your property.       
       try{
            // Retrieve token from req.headers
            console.log("Get token from req.headers['authorization']");
            const token = req.headers["authorization"]
            console.log(token);
            next()
       }catch(e){
            res.json({
                status: res.statusCode,
                msg: e.message
            })
       }}

    module.exports = {
        createToken,
        verifyAToken
    }
 

    /**
     * sign = create a token and sign off the user
     * payload - SERKEY KEY - EXPIRATIOM FOR SESSION 
     * secrate key == allows us to lock and unlock (encrp and decrp) 
     * 
     * NEXT = tells us it is a middleware function (27:30 rec)
     */




