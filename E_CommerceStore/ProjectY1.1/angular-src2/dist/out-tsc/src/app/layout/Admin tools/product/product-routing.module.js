"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_component_1 = require("./product.component");
var routes = [
    { path: '', component: product_component_1.ProductComponent },
    { path: 'add', loadChildren: './product-add/product-add.module#ProductAddModule' },
    { path: 'info/:id', loadChildren: './product-info/product-info.module#ProductInfoModule' },
    { path: 'remove-confirm/:id', loadChildren: './remove-confirm/remove-confirm.module#RemoveConfirmModule' },
];
var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    return ProductRoutingModule;
}());
ProductRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ProductRoutingModule);
exports.ProductRoutingModule = ProductRoutingModule;
//# sourceMappingURL=product-routing.module.js.map