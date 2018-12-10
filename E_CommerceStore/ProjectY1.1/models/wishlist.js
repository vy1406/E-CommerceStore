const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config/database');


// Product Schema
const WishlistSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    }
});

const Wishlist = module.exports = mongoose.model('Wishlist', WishlistSchema);

module.exports.addToWishlist = function (newWish, callback) {
    newWish.save(callback); 
}

module.exports.checkIfInList = function (wish, callback) {
    const query = { user: wish.user, product: wish.product };
    Wishlist.findOne(query,callback);
}

module.exports.getWishList = function (userId, callback) {
    const query = { user: userId };
    Wishlist.find(query, callback).populate('product');
}

module.exports.removeFromWishlist = function (wish, callback) {
    const query = { user: wish.user, product: wish.product };
    Wishlist.remove(query, callback);
}