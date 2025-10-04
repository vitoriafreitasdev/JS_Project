const {User} = require("../model/User")
const bcrypt = require("bcrypt")
require("dotenv").config()
const secret = process.env.SECRET
const UserController = {

    register: async (req, res) => {

        try {
            const {name, email, password} = req.body 

            const salt = bcrypt.salt(12)
            const passwordCrypt = bcrypt.hash(salt, password)

            const user = {
                name: name,
                email: email,
                password: passwordCrypt
            }

            const response = await User.create(user)
            
            res.status(201).json({msg: "Criado com sucesso", response})

        } catch (error) {
            console.log(error)
            res.status(422).json({msg: "Algum erro aconteceu, tente novamente."})

        }
    }

    /* fazer o teste com register */

}

module.exports = UserController