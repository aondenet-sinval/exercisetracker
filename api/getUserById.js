const User = require('../models/User');

module.exports = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
};
