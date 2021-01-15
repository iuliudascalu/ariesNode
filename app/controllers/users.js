"use strict"

const User = require('../models/users')

module.exports = {
  getUsers,
  mid2,
  mid3,
  createUser,
  getUsersById
}

function getUsersById(req, res, next) {
  const {userId} = req.params;
  User.find({_id: userId}, function (error, result) {
    if(error) {
      return res.status(404).json(error);
    }

    return res.json(result)
  })
}

function getUsers(req, res, next) {
  User.find(function (error, result) {
    if(error) {
      return res.status(404).json(error);
    }

    return res.json(result)
  })
}

function createUser(req, res, next) {
  const user = new User(req.body);

  user.save(function (error, result) {
    if(error) {
      console.log(error);
      return res.status(500).json(error)
    }

    return res.json(result)
  })
}

function mid2(req, res, next) {
  console.log("mid2");
  next();
}

function mid3(req, res, next) {
  return res.json({route: '/users', type: 'post'});
}
