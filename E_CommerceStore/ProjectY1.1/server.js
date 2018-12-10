const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to Database
mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useMongoClient: true});

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

// On error
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});

const app = express();
const users = require('./routes/users');
const products = require('./routes/products');
const countries = require('./routes/Countries');
const categories = require('./routes/categories');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.resolve('uploads')));

// Body Praser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/products', products);
app.use('/countries', countries);
app.use('/categories', categories);

//// Catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});

//// Error handlers
//app.use(function (err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});

// Index Route
//app.get('/public/uploads/*', (req, res) => {
//    console.log(req.url);
//    res.sendFile(req.url);
//});

app.get('/', (req, res) => {
    res.send('Invalid asd');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server 
app.listen(port, () => {
    console.log('server Started on port ' + port);
});