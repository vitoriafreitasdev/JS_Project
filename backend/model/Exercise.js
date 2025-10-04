const mongoose = require("mongoose")

const {Schema} = mongoose

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }, 
    reps: {
        types: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const ExerciseModel = mongoose.model("Exercise", ExerciseSchema)

module.exports = {
    ExerciseModel,
    ExerciseSchema
}