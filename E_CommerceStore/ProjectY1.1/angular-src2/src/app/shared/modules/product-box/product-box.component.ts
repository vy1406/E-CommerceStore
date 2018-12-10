import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../models';
import { AuthService, SharedService, CartService } from '../../services';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {
    @Input() product: Product;
    @Input() fromWhere: string;
    @ViewChild('closeBut') closeBut: ElementRef;
    closeResult: string;

    constructor(private modalService: NgbModal,
                private flashMessage: FlashMessagesService,
                private authService: AuthService,
                private sharedService: SharedService,
                private cartService: CartService) { }

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

    ngOnInit() {
    }

    addToWishList() {
        this.authService.addToWishList(this.product).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('Product has been added', { cssClass: 'alert-success', timeout: 3000 });
                window.scrollTo(0, 0);
            }
            else {
                console.log(data.msg);
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
            }
        });
    }

    removeFromWishList() {
        this.authService.removeFromWishlist(this.product).subscribe(data => {
            if (data.success) {
                this.sharedService.wishlistUpdated(this.product._id);
                this.flashMessage.show('Product has been removed from your wishlist', { cssClass: 'alert-success', timeout: 3000 });
                window.scrollTo(0, 0);
            }
            else {
                console.log(data.msg);
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
            }
        });
    }

    onClickAddToCart(quantity) {
        this.flashMessage.show('The product has been added', { cssClass: 'alert-success', timeout: 3000 });
        this.cartService.addItemToCart(this.product, quantity);
        window.scrollTo(0, 0);
    }
}
