const SECRETKEY = "r09jknfi20jfjtu4jf0"
const jwt = require('jsonwebtoken')

const authenticateJwt = (req,res,next)=>{
    const authHeader = req.headers.authorization
    if(authHeader){
        const token = authHeader.split(' ')[1]
        jwt.verify(token, SECRETKEY,(err,user)=>{
            if(err){
                return res.sendStatus(403)
            }
            req.user = user
            next()
        })
    }else{
        return res.sendStatus(401)
    }
}

module.exports = {
    SECRETKEY,
    authenticateJwt
}