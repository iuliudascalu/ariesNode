"use strict"

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const categoriesSchema = new Schema({
  name: {
    type: String,
    required: [true, 'category name is req'],
    unique: true
  },
  description: {
    type: String
  },
  userId: {
    type: ObjectId,
    ref: 'user',
    required: true
  },
  reviews: [
    {
      description: {
        type: String
      },
      rate: {
        type: Number
      }
    }
  ]
}, {
  timestamps: {currentTime: () => new Date().getDate()}
})

module.exports = mongoose.model('category', categoriesSchema, 'category');
