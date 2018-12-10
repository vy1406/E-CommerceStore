const mongoose = require('mongoose');
const config = require('../config/database');

// Product Schema
const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true
    },
    info: {
        type: String
    },
    pic: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    volume: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    }
});

const Product = module.exports = mongoose.model('Product', ProductSchema);

module.exports.getProductById = function (id, callback) {
    Product.findById(id, callback);
}

module.exports.getProductByName = function (name, callback) {
    const query = { productName: name }
    Product.findOne(query, callback);
}

module.exports.addProduct = function (newProduct, callback) {
    newProduct.save(callback); 
}

module.exports.removeProduct = function (id, callback) {
    Product.findByIdAndRemove(id, callback);
}

module.exports.updateProduct = function (id, updatedProduct, callback) {
    Product.findByIdAndUpdate(id, updatedProduct, callback);
}

module.exports.searchProductByKey = function (productKeyWord, callback) {
    const query = { productName: { "$regex": productKeyWord, "$options": "i" } }
    Product.find(query, callback);
}

module.exports.getAllProducts = function (callback) {
    Product.find(callback);
}

module.exports.getProductByCategory = function (name, callback) {

    const query = { category: name };
    Product.find(query, callback);
}