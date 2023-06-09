const User = require('../models/user')

const addUser =(req, res) => {
  const body = req.body
  const user = new User( {
    username: body.username,
  } )
  user
    .save()
    .then(savedUser => {
      res.json(savedUser)
    })
    .catch(error => res.json({error: error}))
};

module.exports = addUser
