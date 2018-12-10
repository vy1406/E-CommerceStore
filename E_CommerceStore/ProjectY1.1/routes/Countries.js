const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Country = require('../models/country');

// Get countries
router.get('/getAll', (req, res, next) => {

    console.log('Get countries attempt:----------------------------------------------- ');

    Country.getAllCountries((err, result) => {
        if (err) {
            res.json({ success: false, msg: err });
        }
        else {
            res.json({ success: true, answer: result });
        }
    });
});

module.exports = router;