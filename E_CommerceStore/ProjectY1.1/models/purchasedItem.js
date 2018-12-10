const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;

// Product Schema
const PurchasedItemSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
        
    },
    
    arrItems: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: String,
            required: true
        }
    }],

    totalAmount: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    }
});

const PurchasedItem = module.exports = mongoose.model('PurchasedItem', PurchasedItemSchema);

module.exports.addPurchasedItem = function (newPurchasedItem, callback) {
    newPurchasedItem.save(callback);
}

module.exports.getHistory = function (userId, callback) {
    const query = { user: userId };
    PurchasedItem.find(query, callback).populate('arrItems.product');
}

module.exports.getHistoryItem = function (id, callback) {
    PurchasedItem.findById(id, callback).populate('arrItems.product');
}