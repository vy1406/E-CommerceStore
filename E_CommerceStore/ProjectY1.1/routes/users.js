const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Wishlist = require('../models/wishlist');
const PurchasedItem = require('../models/purchasedItem');

// Register 
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: 'user'
    });
    if (req.body.email == "admin@admin.com")
        newUser.role = "admin";

    console.log('Successful register attempt:----------------------------------------------- ');
    console.log(newUser);
    User.getUserByEmail(newUser.email, (err, user) => {
        if (err) throw err;
        if (user) {
            res.json({ success: false, msg: 'Email already in use' });
        }
        else {
            User.addUser(newUser, (err, user) => {
                if (err) {
                    res.json({ success: false, msg: 'Failed to register user' });
                }
                else {
                    res.json({ success: true, msg: 'User registred' });
                }
            })
        }
    });
});

// Authenticate 
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log("In authenticate function:" + email+":"+password);

    User.getUserByEmail(email, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err
            if (isMatch) {
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 604800 // 1 week
                });
                console.log('Successful login attempt:----------------------------------------------- ');
                console.log(user);

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    }
                });
            }
            else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

// Profile 
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({ user: req.user });
});

// Add to Wishlist 
router.post('/addToWishlist', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    console.log('Add wish attempt:----------------------------------------------- ');

    let newWish = new Wishlist({
        user: req.user._id,
        product: req.body.product._id
    });
    console.log(newWish);
    Wishlist.checkIfInList(newWish, (err, wish) => {
        if (wish)
        {
            res.json({ success: false, msg: 'The product already in your wishlist' });
        }
        else {
            Wishlist.addToWishlist(newWish, (err, wish) => {
                if (err) {
                    console.log('------------------------------------------------------------------------------------- ');
                    console.log(err);
                    console.log('------------------------------------------------------------------------------------- ');
                    res.json({ success: false, msg: err });
                }
                else {
                    res.json({ success: true, msg: 'The Product has been added to your wishlist' });
                }
            });
        }


    });
    
});

// Remove from Wishlist 
router.post('/removeFromWishlist', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    console.log('Remove wish attempt:----------------------------------------------- ');

    let removeWish = new Wishlist({
        user: req.user._id,
        product: req.body.product._id
    });
    console.log(removeWish);
    Wishlist.checkIfInList(removeWish, (err, wish) => {
        if (!wish) {
            res.json({ success: false, msg: 'The product is not in your wishlist' });
        }
        else {
            Wishlist.removeFromWishlist(removeWish, (err, wish) => {
                if (err) {
                    console.log('------------------------------------------------------------------------------------- ');
                    console.log(err);
                    console.log('------------------------------------------------------------------------------------- ');
                    res.json({ success: false, msg: err });
                }
                else {
                    res.json({ success: true, msg: 'The Product has been removed from you wishlist' });
                }
            });
        }
    });
});

// Get Wishlist 
router.get('/getWishlist', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    console.log('Get wishlist attempt:----------------------------------------------- ');

    Wishlist.getWishList(req.user._id, (err, wishlist) => {
        if (err) {
            res.json({ success: false, msg: err.errmsg });
        }
        else {
            console.log(wishlist);
            res.json({ success: true, answer: wishlist });
        }
    });
});

// Add purchase
router.post('/addPurchasedItem', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    let purchasedItem = new PurchasedItem({
        user: req.user._id,
        arrItems: req.body.cartItems,
        totalAmount: req.body.totalAmount,
        date: Date.now()
    });

    console.log('Successful addPruchasedItem attempt:----------------------------------------------- ');
    console.log(purchasedItem);

    PurchasedItem.addPurchasedItem(purchasedItem, (err, item) => {
        if (err) {
            console.log("----------------------------------------------------------------------");
            console.log(err);
            console.log("----------------------------------------------------------------------");
            res.json({ success: false, msg: err });
        }            
        else
            res.json({ success: true, msg: 'Thank you for buying. we will contact with you about delivery' });
    });   
});

// Get History 
router.get('/getHistory', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    console.log('Get history attempt:----------------------------------------------- ');

    PurchasedItem.getHistory(req.user._id, (err, history) => {
        if (err) {
            res.json({ success: false, msg: err.errmsg });
        }
        else {
            console.log(history);
            res.json({ success: true, answer: history });
        }
    });
});

// Get History item
router.post('/getHistoryItem', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    console.log('Get history item attempt:----------------------------------------------- ');

    PurchasedItem.getHistoryItem(req.body.id, (err, historyItem) => {
        if (err) {
            res.json({ success: false, msg: err.errmsg });
        }
        else {
            console.log(historyItem);
            res.json({ success: true, answer: historyItem });
        }
    });
});

module.exports = router;