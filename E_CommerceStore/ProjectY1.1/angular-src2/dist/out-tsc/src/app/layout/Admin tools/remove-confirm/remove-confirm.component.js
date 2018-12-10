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
var router_animations_1 = require("../../../router.animations");
var shared_1 = require("../../../shared");
var angular2_flash_messages_1 = require("angular2-flash-messages");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var shared_2 = require("../../../shared");
var RemoveConfirmComponent = (function () {
    function RemoveConfirmComponent(flashMessage, router, productService, route) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.productService = productService;
        this.route = route;
        this.product = new shared_2.Product();
    }
    RemoveConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        // Get product object from serve
        this.productService.getProductById(this.id).subscribe(function (data) {
            _this.product = data.answer;
            if (_this.product == null) {
                _this.router.navigate(['/admin-tools/product']);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Remove product
    RemoveConfirmComponent.prototype.onClickRemoveConfirm = function () {
        var _this = this;
        this.productService.removeProduct(this.product).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Product has been removed', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/admin-tools/product']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
                _this.router.navigate(['/admin-tools/remove-confirm', _this.id]);
            }
        });
    };
    return RemoveConfirmComponent;
}());
RemoveConfirmComponent = __decorate([
    core_1.Component({
        selector: 'app-remove-confirm',
        templateUrl: './remove-confirm.component.html',
        styleUrls: ['./remove-confirm.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [angular2_flash_messages_1.FlashMessagesService,
        router_1.Router,
        shared_1.ProductService,
        router_2.ActivatedRoute])
], RemoveConfirmComponent);
exports.RemoveConfirmComponent = RemoveConfirmComponent;
//# sourceMappingURL=remove-confirm.component.js.map