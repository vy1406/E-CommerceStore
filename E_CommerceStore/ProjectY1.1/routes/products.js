const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Product = require('../models/product');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'./uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });

// Add product 
router.post('/add', upload.any(), (req, res, next) => {
    console.log('Add file attempt:----------------------------------------------- ');
    console.log(req.body);

    let newProduct = new Product({
        productName: req.body.productName,
        price: req.body.price,
        info: req.body.info,
        pic: 'images/' + req.files[0].filename,
        category: req.body.category,
        volume: req.body.volume,
        origin: req.body.origin,
        capacity: req.body.capacity
    });

    console.log(newProduct);

    Product.addProduct(newProduct, (err, product) => {
        if (err) {
            res.json({ success: false, msg: err });
        }
        else {
            res.json({ success: true, msg: 'Product been added' });
        }
    });
});

// Remove product 
router.post('/remove', (req, res, next) => {
    const productId = req.body._id;

    console.log('Remove product attempt:----------------------------------------------- ');
    console.log(productId);

    Product.getProductById(productId, (err, product) => {
        if (err) throw err;
        if (product) {
            Product.removeProduct(productId, (err, product) => {
                if (err) {
                    res.json({ success: false, msg: 'Failed to remove product' });
                }
                else {
                    res.json({ success: true, msg: 'Product been removed' });
                }
            });
        }
        else {
            res.json({ success: false, msg: 'No such product: ' + productId });
        }
    });
});

// Update product 
router.post('/update', upload.any(), (req, res, next) => {
    const _id = req.body._id;
    let oldProduct = new Product();

    Product.getProductById(_id, (err, product) => {
        if (err) throw err
        if (product)
        {
            oldProduct.pic = product.pic;
            console.log("oldProduct.pic: " + oldProduct.pic);

            let updateProduct = new Product({
                _id: _id,
                productName: req.body.productName,
                price: req.body.price,
                info: req.body.info,
                pic: oldProduct.pic,
                category: req.body.category,
                volume: req.body.volume,
                origin: req.body.origin,
                capacity: req.body.capacity
            });
            if (req.files[0] != null) {
                updateProduct.pic = 'images/' + req.files[0].filename;
            }
            console.log('Update product attempt:----------------------------------------------- ');
            console.log(updateProduct);

            Product.updateProduct(_id, updateProduct, (err, product) => {
                if (err || _id == null) {
                    res.json({ success: false, msg: err });
                }
                else {
                    res.json({ success: true, msg: 'Product been updated' });
                }
            });
        }
    });
    
});

// Search product 
router.post('/searchByKeyWord', (req, res, next) => {
    const productKeyWord = req.body.keyWord;

    console.log('Search product attempt:----------------------------------------------- ');
    console.log(productKeyWord);

    Product.searchProductByKey(productKeyWord, (err, result) => {
        if (err) {
            res.json({ success: false, msg: err });
        }
        else {
            res.json({ success: true, answer: result });
        }
    });
});

// Get all products
router.get('/getAll', (req, res, next) => {

    console.log('Get all products attempt:----------------------------------------------- ');

    Product.getAllProducts((err, result) => {
        if (err) {
            res.json({ success: false, msg: err });
        }
        else {
            console.log(result);
            res.json({ success: true, answer: result });
        }
    });
});

// Get product by id
router.post('/getById', (req, res, next) => {

    var id = req.body.id;
    console.log('Get product by id attempt:----------------------------------------------- ');
    console.log(id);

    Product.getProductById(id, (err, product) => {
        if (err) {
            res.json({ success: false, msg: err });
        }
        else {
            res.json({ success: true, answer: product });
        }
    });
});

// Get products by category name
router.post('/getByCategory', (req, res, next) => {

    var categoryName = req.body.categoryName;
    console.log('Get products by categoryName attempt:----------------------------------------------- ');
    console.log(categoryName);

    Product.getProductByCategory(categoryName, (err, products) => {
        if (err) {
            res.json({ success: false, msg: err });
        }
        else {
            console.log(products);
            res.json({ success: true, answer: products });
        }
    });
});

module.exports = router;