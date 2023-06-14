const User = require('../models/user')
const dateForString = require('../utils/dateForString')
const Exercise = require('../models/exercise')

const getUserLogsById = async (req, res) => {
  const { from, to, limit } = req.query
  console.log('from ', from, ' to ', to,  ' limit ', limit);
  const name = await User.findById(req.params._id)
  const user = await Exercise.findOne({ 'username': name.username })
  const countQuery = await Exercise
    .where({ 'username': name.username })
    .countDocuments().exec()
  // Definindo condições de pesquisa
  const now = new Date()
  const minDate = new Date(from ? from : '2000-01-10')//data inicial
  const maxDate = new Date(to ? to : now) //data final
  const qtdeMin =  limit ? limit : countQuery //consultar limite ou todos
    let exercises = await Exercise.find({date: {$gte: minDate, $lte: maxDate}})
      .all('username', [ name.username]).limit(qtdeMin)
      .select({ description: 1, duration: 1, date: 1 })
      .exec()
  // Chamada da função para converter as datas em string
  dateForString(exercises)
  const log = {
    username: name.username,
    count: countQuery,
    _id: req.params._id,
    log: exercises
  }
  if (user) {
    res.json(log)
  }else {
    res.json({ user: "not user"})
  }
};

module.exports = getUserLogsById
