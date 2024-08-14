const jwt = require('jsonwebtoken')

async function handleAuthentication(req,res,next){

    try{
        const user_token = req.cookies.token
        if(!user_token) throw new Error('Not able to read cookie')

        const user = jwt.verify(user_token)

        if(!user) throw new Error('Login Required!!')

        req.user=user;

        next();
    }
    catch(err){
        res.status(400).json({
            "error":err.message||err
        })
    }
   
    
    
}