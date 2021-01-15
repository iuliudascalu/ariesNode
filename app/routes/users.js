"use strict"
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const auth = require('../controllers/auth');
const {getUsers,getUsersById, mid2, mid3} = userController;

router.post('/users', auth.isAdmin, userController.createUser, mid3);
router.get('/users', auth.isAdmin, getUsers);
router.get('/users/:userId', auth.isAdmin, getUsersById);

module.exports = router;
