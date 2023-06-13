const Exercise = require('../models/exercise')
const User = require('../models/user')

const addExercise = async (req, res) => {
  const userId = req.params.id;
  const { description, duration } = req.body;

    const body = req.body
    // verificando usuários
    // let users = {}
    const user = await User.findById(req.params.id)
      // console.log('userxx', user);
    const now = new Date()
    const exercise = new Exercise( {
      username: user.username,
      description: body.description,
      duration: body.duration,
      date: body.date ? body.date : now,
    } )
    exercise.save()
      .then(savedExercise => savedExercise.toJSON())
      .then(savedAndFormattedExercise => {
        res.json(savedAndFormattedExercise)
        // mongoose.connection.close()
      } )
      .catch(error => res.json({error: error}))
      //logs
};
module.exports = addExercise
