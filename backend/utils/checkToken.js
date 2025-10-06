const jwt = require("jsonwebtoken")
require("dotenv").config()
const secret = process.env.SECRET

function checkToken(req, res, next){
    const authHeader =  req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({msg: "Acesso negado!"})
    }

    try {
        const decoded = jwt.verify(token, secret)
        req.userId = decoded.id 
        next()
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "Ocorreu um erro"})
    }
}

module.exports = checkToken