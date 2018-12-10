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
var myClass = (function () {
    function myClass() {
    }
    return myClass;
}());
exports.myClass = myClass;
var WishlistComponent = (function () {
    function WishlistComponent(authService, sharedService) {
        var _this = this;
        this.authService = authService;
        this.sharedService = sharedService;
        this.products = [];
        sharedService.wishlistEmitted$.subscribe(function (text) {
            var tmpArray = [];
            for (var i = 0; i < _this.products.length; i++) {
                if (_this.products[i].product._id != text)
                    tmpArray.push(_this.products[i]);
            }
            _this.products = tmpArray;
        });
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getWishlist().subscribe(function (data) {
            if (data.success) {
                _this.products = data.answer;
            }
            else
                console.log(data.msg);
        });
    };
    return WishlistComponent;
}());
WishlistComponent = __decorate([
    core_1.Component({
        selector: 'app-wishlist',
        templateUrl: './wishlist.component.html',
        styleUrls: ['./wishlist.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [shared_1.AuthService, shared_1.SharedService])
], WishlistComponent);
exports.WishlistComponent = WishlistComponent;
//# sourceMappingURL=wishlist.component.js.map