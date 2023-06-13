const app = require('express')();

const addUser = require('./addUser');
const getUsers = require('./getUsers');
const getUserById = require('./getUserById');
const getUserLogsById = require('./getUserLogsById');
const addExercise = require('./addExercise');

app.get('/api/teste/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
})
app.get('/api/users', getUsers);

module.exports = app;
