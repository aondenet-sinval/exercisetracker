const app = require('express')();

const addUser = require('./addUser');
const getUsers = require('./getUsers');
const getUserById = require('./getUserById');
const getUserLogsById = require('./getUserLogsById');
const addExercise = require('./addExercise');

app.get('/api/users', getUsers);

module.exports = app;
