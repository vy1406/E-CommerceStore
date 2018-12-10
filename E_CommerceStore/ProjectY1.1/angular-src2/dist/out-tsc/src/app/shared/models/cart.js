"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = (function () {
    function Cart() {
        this.cartItems = new Array();
        this.totalAmount = 0;
    }
    Cart.prototype.addToCart = function (cartItem) {
        this.cartItems.push(cartItem);
        this.totalAmount += cartItem.quantity * parseInt(cartItem.product.price);
    };
    Cart.prototype.isItemExist = function (cartItem) {
        for (var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].product._id == cartItem.product._id) {
                return true;
            }
        }
        return false;
    };
    Cart.prototype.updateQuantity = function (cartItem, newQuantity) {
        for (var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].product._id == cartItem.product._id) {
                var productPrice = parseInt(this.cartItems[i].product.price);
                var currQuantity = +this.cartItems[i].quantity;
                this.totalAmount = +this.totalAmount - (+productPrice * +currQuantity);
                this.cartItems[i].quantity = +currQuantity + +newQuantity;
                this.totalAmount = +this.totalAmount + (+this.cartItems[i].quantity * +productPrice);
            }
        }
    };
    Cart.prototype.removeFromCart = function (cartItem) {
        var index;
        for (var i = 0; i < this.cartItems.length; i++)
            if (cartItem.product._id == this.cartItems[i].product._id)
                index = i;
        if (index > -1) {
            this.cartItems.splice(index, 1);
        }
        this.totalAmount -= cartItem.quantity * parseInt(cartItem.product.price);
    };
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=cart.js.map