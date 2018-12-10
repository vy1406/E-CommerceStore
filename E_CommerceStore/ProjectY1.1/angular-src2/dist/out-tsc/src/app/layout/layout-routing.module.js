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
var layout_component_1 = require("./layout.component");
var shared_1 = require("app/shared");
var routes = [
    {
        path: '', component: layout_component_1.LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: '', loadChildren: './user/user-routing.module#UserRoutingModule' },
            { path: 'admin-tools', loadChildren: './Admin tools/admin-tools.module#AdminToolsModule', canActivate: [shared_1.AdminGuard] },
            { path: 'show-products/:searchWord', loadChildren: './show-products/show-products.module#ShowProductsModule' },
            { path: 'show-categories', loadChildren: './show-categories/show-categories.module#ShowCategoriesModule' },
            { path: 'advanced-search', loadChildren: './advanced-search/advanced-search.module#AdvancedSearchModule' },
            { path: 'category-products/:categoryName', loadChildren: './category-products/category-products.module#CategoryProductsModule' },
            { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
        ]
    }
];
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());
LayoutRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], LayoutRoutingModule);
exports.LayoutRoutingModule = LayoutRoutingModule;
//# sourceMappingURL=layout-routing.module.js.map