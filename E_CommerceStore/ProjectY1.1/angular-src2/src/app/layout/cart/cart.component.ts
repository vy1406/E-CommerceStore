import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CartService, AuthService } from '../../shared';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Cart, CartItem } from '../../shared';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [routerTransition()]
})
export class CartComponent implements OnInit {
    cart: Cart;                 // items from the session, to show at the cart table
    closeResult: string;        // item = f.e: {product as object, quantity }
    constructor(
        private modalService: NgbModal,
        private flashMessage: FlashMessagesService,
        private router: Router,
        private cartService: CartService,
        private authService: AuthService) { }

    ngOnInit() {
        this.cart = this.cartService.loadCart();    
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    checkPayClick(content) {
        if (this.cart.totalAmount == 0)
            return;
        else
            this.open(content);
    }
    onClickEmptyCart(){
        sessionStorage.clear();
        this.cart = new Cart();
        this.flashMessage.show('The cart has been emptied.', { cssClass: 'alert-success', timeout: 3000 });
    }

    onClickRemoveFromCart(cartItem: CartItem) {
        this.cartService.removeFromCart(cartItem, () => {
            this.cart = this.cartService.loadCart();
        });
    }

    onClickPay() {
        this.authService.addPurchasedItemToDB(this.cart).subscribe(data => {
            if (data.success) {
                this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 4000 });
                this.cart = new Cart();
                sessionStorage.setItem('cart', JSON.stringify(this.cart));
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });           
            }
        });
    }


}
