const User = require('../models/user');

module.exports = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json({ error: error.message });
  }
};
