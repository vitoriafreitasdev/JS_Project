const mongoose = require("mongoose")

const {Schema} = mongoose

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    series: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const Exercise = mongoose.model("Exercise", ExerciseSchema)

module.exports = {
    Exercise,
    ExerciseSchema,
}