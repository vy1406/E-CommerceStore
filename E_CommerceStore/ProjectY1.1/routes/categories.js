const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Category = require('../models/category');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });

// Add category
router.post('/add', upload.any(), (req, res, next) => {
    console.log('Add Category attempt:----------------------------------------------- ');

    let newCategorr = new Category({
        categoryName: req.body.categoryName,
        pic: 'images/' + req.files[0].filename,
    });

    console.log(newCategorr);

    Category.addCategory(newCategorr, (err, category) => {
        if (err) {
            res.json({ success: false, msg: err });
        }
        else {
            res.json({ success: true, msg: 'Category been added' });
        }
    });
});

// Remove category
router.post('/remove', (req, res, next) => {
    const categoryId = req.body._id;

    console.log('Remove category attempt:----------------------------------------------- ');
    console.log(categoryId);

    Category.getCategoryById(categoryId, (err, category) => {
        if (err) throw err;
        if (category) {
            Category.removeCategory(categoryId, (err, category) => {
                if (err) {
                    res.json({ success: false, msg: err });
                }
                else {
                    res.json({ success: true, msg: 'Category been removed' });
                }
            });
        }
        else {
            res.json({ success: false, msg: 'No such category: ' + categoryId });
        }
    });
});

// Update category 
router.post('/update', upload.any(), (req, res, next) => {
    const _id = req.body._id;
    let oldCategory = new Category();

    Category.getCategoryById(_id, (err, category) => {
        if (err) throw err
        if (category) {
            oldCategory.pic = category.pic;
            console.log("oldCategory.pic: " + oldCategory.pic);

            let updateCategory = new Category({
                _id: _id,
                categoryName: req.body.categoryName,  
                pic: oldCategory.pic,
            });
            if (req.files[0] != null) {
                updateCategory.pic = 'images/' + req.files[0].filename;
            }
            console.log('Update category attempt:----------------------------------------------- ');
            console.log(updateCategory);

            Category.updateCategory(_id, updateCategory, (err, category) => {
                if (err || _id == null) {
                    res.json({ success: false, msg: err });
                }
                else {
                    res.json({ success: true, msg: 'Category been updated' });
                }
            });
        }
    });
});

// Search category
router.post('/searchByKeyWord', (req, res, next) => {
    const categoryKeyWord = req.body.categoryKeyWord;

    console.log('Search category attempt:----------------------------------------------- ');
    console.log(categoryKeyWord);

    Product.searchCategoryByKey(categoryKeyWord, (err, result) => {
        if (err) {
            res.json({ success: false, msg: err });
        }
        else {
            res.json({ success: true, answer: result });
        }
    });
});

// Get all categories
router.get('/getAll', (req, res, next) => {

    console.log('Get all categories attempt:----------------------------------------------- ');

    Category.getAllCategories((err, result) => {
        if (err) {
            res.json({ success: false, msg: err });
        }
        else {
            res.json({ success: true, answer: result });
        }
    });
});

// Get category by id
router.post('/getById', (req, res, next) => {

    var id = req.body.id;
    console.log('Get category by id attempt:----------------------------------------------- ');
    console.log(id);

    Category.getCategoryById(id, (err, category) => {
        if (err) {
            res.json({ success: false, msg: err });
        }
        else {
            res.json({ success: true, answer: category });
        }
    });
});
module.exports = router;