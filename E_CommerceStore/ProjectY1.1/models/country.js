const mongoose = require('mongoose');
const config = require('../config/database');

// Product Schema
const CountrySchema = mongoose.Schema({
    shortname: {
        type: String,
        required: true,
        unique: true
    },
    countryName: {
        type: String,
        required: true
    }
});

const Country = module.exports = mongoose.model('Country', CountrySchema);

module.exports.getAllCountries = function (callback) {
    Country.find(callback);
}

