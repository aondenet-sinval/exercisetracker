const mongoose = require('mongoose')
const config = require('../utils/config')
const User = require('./user')
const url = config.MONGODB_URI
mongoose.connect(url)

const exerciseSchema = new mongoose.Schema( {
  username: { type: String},
  description: {
    type: String,
    minlength: 5,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
} )
exerciseSchema.set('toJSON', {
  transform:(document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
} )

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
