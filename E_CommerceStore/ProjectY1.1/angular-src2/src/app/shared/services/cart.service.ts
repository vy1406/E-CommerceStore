import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Cart } from '../models';
import { CartItem, Product } from '../models';
import { ProductService } from './product.service';

import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

    public cart: Cart = new Cart();

    constructor(private productService: ProductService, private http: Http) {
    }

    loadCart() {
        var sessionString = sessionStorage.getItem('cart');
        if (sessionString == undefined)
            this.cart = new Cart();
        else
            this.cart = JSON.parse(sessionString);

        Object.setPrototypeOf(this.cart, Cart.prototype);
        return this.cart;
    }
    
    removeFromCart(cartItem: CartItem, callback) {
        this.loadCart();
        this.cart.removeFromCart(cartItem);
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
        callback();
    }

    addItemToCart(product: Product, quantity) {
        let cartItem: CartItem = new CartItem(product, quantity);
        this.loadCart();

        if (this.cart.isItemExist(cartItem)) {                   
            this.cart.updateQuantity(cartItem, quantity);
        }
        else {
            this.cart.addToCart(cartItem);
        }

        sessionStorage.setItem('cart', JSON.stringify(this.cart));
    }

}
