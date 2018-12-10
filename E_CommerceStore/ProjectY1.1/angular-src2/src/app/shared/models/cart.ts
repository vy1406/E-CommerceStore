import { CartItem } from './cartItem';

export class Cart {
    cartItems: CartItem[];
    totalAmount: number;

    constructor() {
        this.cartItems = new Array<CartItem>();
        this.totalAmount = 0;
    }

    addToCart(cartItem : CartItem) { 
        this.cartItems.push(cartItem);  
        this.totalAmount += cartItem.quantity * parseInt(cartItem.product.price);
    }

    isItemExist(cartItem: CartItem) {
        for (var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].product._id == cartItem.product._id) {
                return true;
            }
        }
        return false;
    }
    
    updateQuantity(cartItem: CartItem, newQuantity: number) {
        for (var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].product._id == cartItem.product._id) {
                var productPrice = parseInt(this.cartItems[i].product.price);
                var currQuantity = +this.cartItems[i].quantity;

                this.totalAmount = +this.totalAmount - (+productPrice * +currQuantity);
                this.cartItems[i].quantity = +currQuantity + +newQuantity;
                this.totalAmount = +this.totalAmount + (+this.cartItems[i].quantity * +productPrice);
            }
        }
    }

    removeFromCart(cartItem: CartItem) {
        let index;
        for (var i = 0; i < this.cartItems.length; i++)
            if (cartItem.product._id == this.cartItems[i].product._id)
                index = i;

        if (index > -1) {
            this.cartItems.splice(index, 1);
        }
        
        this.totalAmount -= cartItem.quantity * parseInt(cartItem.product.price);
    }
}

