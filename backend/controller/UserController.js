
const {User} = require("../model/User")
const {Exercise} = require("../model/Exercise")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

require("dotenv").config()
const secret = process.env.SECRET
const UserController = {

    register: async (req, res) => {

        try {
            const {name, email, password} = req.body 

            const findUser = await User.findOne({email: email})

            if(findUser){
                return res.status(422).json({msg: "Esse E-mail já existe, utilize outro."})
            }

            const salt = await bcrypt.genSalt(12)
            const passwordCrypt = await bcrypt.hash(password, salt)

            const user = {
                name: name,
                email: email,
                password: passwordCrypt
            }

            const response = await User.create(user)
            const id = response._id
            const token = jwt.sign({id: id}, secret)
            res.status(201).json({msg: "Criado com sucesso", response, token, id})

        } catch (error) {
            console.log(error)
            res.status(422).json({msg: "Algum erro aconteceu, tente novamente."})

        }
    },
    login: async (req, res) => {
       try {
            const {email, password} = req.body 

            const user = await User.findOne({email: email})

            if(!user){
                return res.status(422).json({msg: "Usuário não encontrado."})
            }

            const passwordCheck = bcrypt.compare(password, user.password)

            if(!passwordCheck){
                return res.status(422).json({msg: "Senha errada."})
            }
            
            const id = user._id
            const token = jwt.sign({id: id}, secret)

            res.status(200).json({msg: "Login feito com sucesso", id, token})
       } catch (error) {
            console.log(error)
            res.status(422).json({msg: "Algum erro aconteceu, tente novamente."})

       }
    },
    getUser: async (req, res) => {
        try {
            const id = req.params.id
            const user = await User.findById(id)

            if(!user) return res.status(404).json({msg: "Usuário não encontrado"})

            res.status(200).json(user)
        } catch (error) {
            
        }
    },
    addExercise: async (req, res) => {
        try {
            const {name, series, reps, weight, day} = req.body
            const userId = req.params.id
            
            const exercise = {
                name: name,
                series: series,
                reps: reps,
                weight: weight,
                day: day,
                ownerId: userId
            }

            const create = await Exercise.create(exercise)

            const user = await User.findByIdAndUpdate(userId, {$push: {exercises: create}}, {new: true})

            res.status(200).json({msg: "Adicionado com sucesso", create, user})
        } catch (error) {
            console.log()
        }
    },
    deleteExercise: async (req, res) => {
        try {
            const exerciseId = req.params.id 
            const userId = req.userId

            const exercise = await Exercise.findById(exerciseId)
            const user = await User.findByIdAndUpdate(userId, {$pull: {exercises: exercise}}, {new: true})
            const deleted = await Exercise.findByIdAndDelete(exerciseId)

            res.status(200).json({msg: "Deletado com sucesso.", user, deleted})

            
        } catch (error) {
            console.log(error)
            res.status(422).json({msg: "Algum erro aconteceu, tente novamente."})
        }
    },
    uptade: async (req, res) => {
        try {
            const exerciseId = req.params.id 
            const userId = req.userId 
            const {name, series, reps, weight, day} = req.body

            const exerciseUptate = {
                name: name,
                series: series,
                reps: reps,
                weight: weight,
                day: day,
                ownerId: userId
            }
           
            const uptade = await Exercise.findByIdAndUpdate(exerciseId, exerciseUptate, {new: true})
            const exercises = await Exercise.find({ownerId: userId})
            const userUptade = await User.findByIdAndUpdate(userId, {exercises: exercises}, {new: true})

            res.status(200).json({msg: "Atualizado com sucesso.", uptade, userUptade})

        } catch (error) {
            console.log(error)
            res.status(422).json({msg: "Algum erro aconteceu, tente novamente."})
        }
    }

}

module.exports = UserController