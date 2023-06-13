const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const User = require('./models/user')
const Exercise = require('./models/exercise')
const getUsers = require('./api/getUsers');
const addUser = require('./api/addUser');
const getUserById = require('./api/getUserById');
const getUserLogsById = require('./api/getUserLogsById');
const addExercise = require('./api/addExercise');
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});

app.use(bodyParser.urlencoded({extended: false}))
//rotas
app.get('/api/users', getUsers);
app.get('/api/users/:id', getUserById);
app.get('/api/users/:id/logs', getUserLogsById);
// app.post('/api/users', addUser);
// app.post('/api/users/:id/exercises', addExercise);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
