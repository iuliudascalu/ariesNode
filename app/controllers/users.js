"use strict"

const User = require('../models/users')
module.exports = {
  getUsers,
  createUser,
  getUsersById,
  deleteUsersById
}

function deleteUsersById(req, res, next) {
  const {userId} = req.params;

  User.deleteOne({_id: userId}, function (error, result) {
    if (error) {
      return next(error)
    }
    next()
  })
}

function getUsersById(req, res, next) {
  const {userId} = req.params;
  User.find({_id: userId}, function (error, result) {
    if (error) {
      return next(error)
    }

    req.resources.user = result;
    return next();
  })
}

function getUsers(req, res, next) {

  User.find(function (error, result) {
    if (error) {
      return next(error)
    }

    return res.json(result)
  })
}

function createUser(req, res, next) {
  const user = new User(req.body);

  user.save(function (error, result) {
    if (error) {
      return next(error)
    }

    return res.json(result)
  })
}
