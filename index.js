const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const User = require('./models/user')
const Exercise = require('./models/exercise')
const dateForString = require('./utils/date-for-string')
const getUsers = require('./api/getUsers');
const getUserById = require('./api/getUserById');
const getUserLogsById = require('./api/getUserLogsById');
const addExercise = require('./api/addExercise');
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});

app.use(bodyParser.urlencoded({extended: false}))
// Teste vercel router start
app.get('/api/users', getUsers);
app.get('/api/users/:id', getUserById);
app.get('/api/users/:id/logs', getUserLogsById);
app.post('/api/users/:id/exercises', addExercise);
// Vercel end
// //Routers Express Node 
// app.post('/api/users', (req, res)=>{
//   const body = req.body
//   const user = new User( {
//     username: body.username,
//   } )
//   user
//     .save()
//     .then(savedUser => savedUser.toJSON())
//     .then(savedAndFormattedUser => {
//       res.json(savedAndFormattedUser)
//       // mongoose.connection.close()
//     } )
//     .catch(error => res.json({error: error}))
// })
// app.get('/api/users', (req, res) => {
//   User.find({}).then(users => {
//     res.json(users)
//   })
// })
// app.get('/api/users/:id', async (req, res) => {
//   const name = await User.findById(req.params.id)
//   const user = await User.findOne({ 'username': name.username })
//   const countQuery = await Exercise.where({ 'username': name.username }).countDocuments().exec();
//   console.log('exercises number ', countQuery);
//   if (user) {
//     res.json(user)
//   }else {
//     res.json({ user: "not user"})
//   }
// })
//
// //Exercises router
// app.post('/api/users/:id/exercises', async (req, res)=>{
//   const body = req.body
//   // verificando usuários
//   // let users = {}
//   const user = await User.findById(req.params.id)
//     // console.log('userxx', user);
//   const now = new Date()
//   const exercise = new Exercise( {
//     username: user.username,
//     description: body.description,
//     duration: body.duration,
//     date: body.date ? body.date : now,
//   } )
//   await exercise
//     .save()
//     .then(savedExercise => savedExercise.toJSON())
//     .then(savedAndFormattedExercise => {
//       res.json(savedAndFormattedExercise)
//       // mongoose.connection.close()
//     } )
//     .catch(error => res.json({error: error}))
//     //logs
// })
// app.get('/api/users/:id/logs', async (req, res) => {
//   const { from, to, limit } = req.query
//   console.log('from ', from, ' to ', to,  ' limit ', limit);
//   const name = await User.findById(req.params.id)
//   const user = await Exercise.findOne({ 'username': name.username })
//   const countQuery = await Exercise
//     .where({ 'username': name.username })
//     .countDocuments().exec()
//   // Definindo condições de pesquisa
//   const now = new Date()
//   const minDate = new Date(from ? from : '2000-01-10')//data inicial
//   const maxDate = new Date(to ? to : now) //data final
//   const qtdeMin =  limit ? limit : countQuery //consultar limite ou todos
//     let exercises = await Exercise.find({date: {$gte: minDate, $lte: maxDate}})
//       .all('username', [ name.username]).limit(qtdeMin)
//       .select({ description: 1, duration: 1, date: 1 })
//       .exec();
//   // Chamada da função para converter as datas em string
//   dateForString(exercises);
//   const log = {
//     username: name.username,
//     count: countQuery,
//     _id: req.params.id,
//     log: exercises
//   }
//   if (user) {
//     res.json(log)
//   }else {
//     res.json({ user: "not user"})
//   }
//
// })
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
