"use strict"
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const {isAdmin} = require('../controllers/auth');
const {getUsers,getUsersById, deleteUsersById, createUser} = userController;
const {responseToJson} = require('../helpers');

router.post('/users', isAdmin, createUser);
router.get('/users', getUsers, responseToJson('users'));
router.get('/users/:userId', getUsersById, responseToJson('users'));
router.delete('/users/:userId', isAdmin, deleteUsersById, responseToJson('users'));
module.exports = router;
