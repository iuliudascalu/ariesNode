"use strict"
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categories');
const {responseToJson} = require('../helpers');
const {isAdmin} = require('../controllers/auth');

const {createCategory, getCategories, getCategoryById, deleteCategoryById} = categoryController;

router.post('/category', isAdmin, createCategory);
router.get('/category', getCategories);
router.get('/category/:categoryId', getCategoryById, responseToJson('categories'));
router.delete('/category/:categoryId', isAdmin, deleteCategoryById, responseToJson('categories'));


module.exports = router;
