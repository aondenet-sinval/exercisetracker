const User = require('../models/user')

const getUsers =(req, res) => {
  try {
    User.find({}).then(users => {
      res.json(users)
    })
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = getUsers
