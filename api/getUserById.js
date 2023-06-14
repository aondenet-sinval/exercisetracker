const User = require('../models/user')

const getUserById = async (req, res) => {
  const name = await User.findById(req.params._id)
  const user = await User.findOne({ 'username': name.username })
  const countQuery = await Exercise.where({ 'username': name.username })
    .countDocuments().exec()
  if (user) {
    res.json(user)
  }else {
    res.json({ user: "not user"})
  }
};
module.exports = getUserById
