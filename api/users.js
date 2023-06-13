const express = require('express');
const app = express()

const addUser = require('./addUser');
const getUsers = require('./getUsers');
const getUserById = require('./getUserById');
const getUserLogsById = require('./getUserLogsById');
const addExercise = require('./addExercise');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    app.post('/api/users', addUser);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
