const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
    type: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
      },
});

const Book = mongoose.model("Workout", WorkoutSchema);

module.exports = Book;