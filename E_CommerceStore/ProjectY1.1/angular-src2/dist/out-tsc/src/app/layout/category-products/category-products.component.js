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
var router_1 = require("@angular/router");
var CategoryProductsComponent = (function () {
    function CategoryProductsComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.products = [];
    }
    CategoryProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.categoryName = params['categoryName'];
            console.log(_this.categoryName);
        });
        // getting the products with 
        this.productService.getProductsByCategory(this.categoryName).subscribe(function (data) {
            if (data.success) {
                _this.products = data.answer;
                console.log(data);
            }
        });
    };
    return CategoryProductsComponent;
}());
CategoryProductsComponent = __decorate([
    core_1.Component({
        selector: 'app-category-products',
        templateUrl: './category-products.component.html',
        styleUrls: ['./category-products.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [shared_1.ProductService,
        router_1.ActivatedRoute])
], CategoryProductsComponent);
exports.CategoryProductsComponent = CategoryProductsComponent;
//# sourceMappingURL=category-products.component.js.map