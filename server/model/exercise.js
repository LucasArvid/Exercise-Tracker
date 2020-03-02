const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  username: String,
  exercise: [{
    desc: String,
    duration: Number,
    date: String
  }]
});

var ExerciseModel = mongoose.model("Exercise", exerciseSchema);

exports.Exercise = ExerciseModel;