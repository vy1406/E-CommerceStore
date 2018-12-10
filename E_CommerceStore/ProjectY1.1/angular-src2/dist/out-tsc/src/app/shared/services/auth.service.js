"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var angular2_jwt_1 = require("angular2-jwt");
var shared_service_1 = require("./shared.service");
var AuthService = (function () {
    function AuthService(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
    }
    // Register new user
    AuthService.prototype.registerUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Authenticate user login
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Get profile
    AuthService.prototype.getProfile = function () {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('Http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Get wishlist
    AuthService.prototype.getWishlist = function () {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('Http://localhost:3000/users/getWishlist', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Add to wishlist(post)
    AuthService.prototype.addToWishList = function (productArg) {
        var data = {
            product: productArg
        };
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/users/addToWishlist', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Remove product from user wishlist
    AuthService.prototype.removeFromWishlist = function (productArg) {
        var data = {
            product: productArg
        };
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/users/removeFromWishlist', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Add purchase history for user
    AuthService.prototype.addPurchasedItemToDB = function (cart) {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        cart.cartItems = this.castToHistoryItem(cart.cartItems);
        return this.http.post('Http://localhost:3000/users/addPurchasedItem', cart, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Get history purchases from db
    AuthService.prototype.getHistory = function () {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('Http://localhost:3000/users/getHistory', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Get history item from db
    AuthService.prototype.getHistoryItem = function (id) {
        var data = {
            id: id
        };
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/users/getHistoryItem', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // cast from cartitems to suitable object for server
    AuthService.prototype.castToHistoryItem = function (cartItems) {
        var newArr = [];
        for (var i = 0; i < cartItems.length; i++) {
            newArr.push({
                product: cartItems[i].product._id,
                quantity: cartItems[i].quantity
            });
        }
        return newArr;
    };
    // Store user data and token in local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // Get token form local storage
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // Returns if we are logged in and token not expired
    AuthService.prototype.loggedIn = function () {
        var flag = angular2_jwt_1.tokenNotExpired('id_token');
        if (!flag) {
            this.sharedService.emitChange('token expired');
            this.logOut();
            return false;
        }
        return true;
    };
    AuthService.prototype.isAdmin = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        //console.log(user);
        if (user != undefined && user.role == 'admin') {
            //console.log('admin');
            return true;
        }
        else {
            //console.log(this.user.role);
            return false;
        }
    };
    // Log out
    AuthService.prototype.logOut = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getUserName = function () {
        var user = localStorage.getItem('user');
        var jsonUser = JSON.parse(user);
        if (jsonUser == undefined)
            return "Profile";
        return jsonUser.name;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        shared_service_1.SharedService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map