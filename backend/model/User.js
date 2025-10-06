const mongoose = require("mongoose")
const {ExerciseSchema} = require("./Exercise")
const {Schema} = mongoose 

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    exercises: [ExerciseSchema]
    
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = {
    User,
    userSchema
}