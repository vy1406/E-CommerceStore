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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var models_1 = require("../../models");
var services_1 = require("../../services");
var angular2_flash_messages_1 = require("angular2-flash-messages");
var ProductBoxComponent = (function () {
    function ProductBoxComponent(modalService, flashMessage, authService, sharedService, cartService) {
        this.modalService = modalService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.sharedService = sharedService;
        this.cartService = cartService;
    }
    ProductBoxComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ProductBoxComponent.prototype.getDismissReason = function (reason) {
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
    ProductBoxComponent.prototype.ngOnInit = function () {
    };
    ProductBoxComponent.prototype.addToWishList = function () {
        var _this = this;
        this.authService.addToWishList(this.product).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Product has been added', { cssClass: 'alert-success', timeout: 3000 });
                window.scrollTo(0, 0);
            }
            else {
                console.log(data.msg);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
            }
        });
    };
    ProductBoxComponent.prototype.removeFromWishList = function () {
        var _this = this;
        this.authService.removeFromWishlist(this.product).subscribe(function (data) {
            if (data.success) {
                _this.sharedService.wishlistUpdated(_this.product._id);
                _this.flashMessage.show('Product has been removed from your wishlist', { cssClass: 'alert-success', timeout: 3000 });
                window.scrollTo(0, 0);
            }
            else {
                console.log(data.msg);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
            }
        });
    };
    ProductBoxComponent.prototype.onClickAddToCart = function (quantity) {
        this.flashMessage.show('The product has been added', { cssClass: 'alert-success', timeout: 3000 });
        this.cartService.addItemToCart(this.product, quantity);
        window.scrollTo(0, 0);
    };
    return ProductBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", models_1.Product)
], ProductBoxComponent.prototype, "product", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProductBoxComponent.prototype, "fromWhere", void 0);
__decorate([
    core_1.ViewChild('closeBut'),
    __metadata("design:type", core_1.ElementRef)
], ProductBoxComponent.prototype, "closeBut", void 0);
ProductBoxComponent = __decorate([
    core_1.Component({
        selector: 'app-product-box',
        templateUrl: './product-box.component.html',
        styleUrls: ['./product-box.component.scss']
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        angular2_flash_messages_1.FlashMessagesService,
        services_1.AuthService,
        services_1.SharedService,
        services_1.CartService])
], ProductBoxComponent);
exports.ProductBoxComponent = ProductBoxComponent;
//# sourceMappingURL=product-box.component.js.map