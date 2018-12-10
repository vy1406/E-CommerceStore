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
var router_animations_1 = require("../../router.animations");
var shared_1 = require("../../shared");
var angular2_flash_messages_1 = require("angular2-flash-messages");
var router_1 = require("@angular/router");
var shared_2 = require("../../shared");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var CartComponent = (function () {
    function CartComponent(modalService, flashMessage, router, cartService, authService) {
        this.modalService = modalService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.cartService = cartService;
        this.authService = authService;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.cart = this.cartService.loadCart();
    };
    CartComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    CartComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    CartComponent.prototype.checkPayClick = function (content) {
        if (this.cart.totalAmount == 0)
            return;
        else
            this.open(content);
    };
    CartComponent.prototype.onClickEmptyCart = function () {
        sessionStorage.clear();
        this.cart = new shared_2.Cart();
        this.flashMessage.show('The cart has been emptied.', { cssClass: 'alert-success', timeout: 3000 });
    };
    CartComponent.prototype.onClickRemoveFromCart = function (cartItem) {
        var _this = this;
        this.cartService.removeFromCart(cartItem, function () {
            _this.cart = _this.cartService.loadCart();
        });
    };
    CartComponent.prototype.onClickPay = function () {
        var _this = this;
        this.authService.addPurchasedItemToDB(this.cart).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 4000 });
                _this.cart = new shared_2.Cart();
                sessionStorage.setItem('cart', JSON.stringify(_this.cart));
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: 'app-cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        angular2_flash_messages_1.FlashMessagesService,
        router_1.Router,
        shared_1.CartService,
        shared_1.AuthService])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map