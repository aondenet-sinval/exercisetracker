const mongoose = require('mongoose')
const config = require('../utils/config')
const Exercise = require('./exercise')
const url = config.MONGODB_URI
mongoose.connect(url)
const userSchema = new mongoose.Schema( {
  username: {
    type: String,
    minlength: 5,
    required: true
  }
} )

userSchema.set('toJSON', {
  transform:(document, returnedObject) => {
    delete returnedObject.__v
  }
} )

const User = mongoose.model('User', userSchema)

module.exports = User
