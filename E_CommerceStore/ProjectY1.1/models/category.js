const mongoose = require('mongoose');
const config = require('../config/database');

// Product Schema
const CategorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
    pic: {
        type: String,
        required: true
    }
});

const Category = module.exports = mongoose.model('Category',CategorySchema);

module.exports.getCategoryById = function (id, callback) {
    Category.findById(id, callback);
}

module.exports.getCategoryByName = function (name, callback) {
    const query = { categoryName: name }
    Category.findOne(query, callback);
}

module.exports.getAllCategories = function (callback) {
    Category.find(callback);
}

module.exports.addCategory = function (newCategory, callback) {
    newCategory.save(callback);
}

module.exports.removeCategory = function (id, callback) {
    Category.findByIdAndRemove(id, callback);
}

module.exports.updateCategory = function (id, updatedCategory, callback) {
    Category.findByIdAndUpdate(id, updatedCategory, callback);
}

module.exports.searchCategoryByKey = function (categoryKeyWord, callback) {
    const query = { categoryName: { "$regex": categoryKeyWord, "$options": "i" } }
    Category.find(query, callback);
}