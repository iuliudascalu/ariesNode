"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  createdAt: Number,
  updatedAt: Number,
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    streetName: {
      type: String,
    },
    streetNumber: {
      type: String
    },
    city: {
      type: String
    }
  }
}, {
  timestamps: {currentTime: ()=> new Date().getDate()}
})

module.exports = mongoose.model('user', userSchema, 'users');
