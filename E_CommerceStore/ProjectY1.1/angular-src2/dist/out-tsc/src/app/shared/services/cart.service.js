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
var models_1 = require("../models");
var models_2 = require("../models");
var product_service_1 = require("./product.service");
require("rxjs/add/operator/map");
var CartService = (function () {
    function CartService(productService, http) {
        this.productService = productService;
        this.http = http;
        this.cart = new models_1.Cart();
    }
    CartService.prototype.loadCart = function () {
        var sessionString = sessionStorage.getItem('cart');
        if (sessionString == undefined)
            this.cart = new models_1.Cart();
        else
            this.cart = JSON.parse(sessionString);
        Object.setPrototypeOf(this.cart, models_1.Cart.prototype);
        return this.cart;
    };
    CartService.prototype.removeFromCart = function (cartItem, callback) {
        this.loadCart();
        this.cart.removeFromCart(cartItem);
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
        callback();
    };
    CartService.prototype.addItemToCart = function (product, quantity) {
        var cartItem = new models_2.CartItem(product, quantity);
        this.loadCart();
        if (this.cart.isItemExist(cartItem)) {
            this.cart.updateQuantity(cartItem, quantity);
        }
        else {
            this.cart.addToCart(cartItem);
        }
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
    };
    return CartService;
}());
CartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [product_service_1.ProductService, http_1.Http])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map