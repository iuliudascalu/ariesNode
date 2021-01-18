"use strict"

const Category = require('../models/categories');

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  deleteCategoryById
}

function createCategory(req, res, next) {
  const category = new Category(req.body);

  category.save(function (error, result) {
    if (error) {
      return next(error)
    }

    return res.json(result)
  })
}

function getCategories(req, res, next) {
  Category
  .find()
  .populate('userId', 'email')
  .exec(function (error, result) {
      if (error) {
       return next(error)
      }

      return res.json(result);
    }
  )
}

function getCategoryById(req, res, next) {
  const {categoryId} = req.params;

  Category.find({_id: categoryId}, function (error, result) {
    if(error) {
      return next(error)
    }

    req.resources.categories = result;
    return next();
  })
}

function deleteCategoryById(req, res, next) {
  const {categoryId} = req.params;

  Category.deleteOne({_id: categoryId}, function (error, result) {
    if (error) {
      return next(error)
    }
    next()
  })
}
