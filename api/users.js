const express = require('express');
const router = express.Router();

const addUser = require('./addUser');
const getUsers = require('./getUsers');
const getUserById = require('./getUserById');
const getUserLogsById = require('./getUserLogsById');
const addExercise = require('./addExercise');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/:id/logs', getUserLogsById);
router.post('/', addUser);
router.post('/:id/exercises', addExercise);

module.exports = router;
