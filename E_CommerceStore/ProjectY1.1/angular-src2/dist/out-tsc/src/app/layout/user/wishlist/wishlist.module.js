"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var wishlist_routing_module_1 = require("./wishlist-routing.module");
var wishlist_component_1 = require("./wishlist.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var shared_1 = require("../../../shared");
var shared_2 = require("../../../shared");
var WishlistModule = (function () {
    function WishlistModule() {
    }
    return WishlistModule;
}());
WishlistModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            wishlist_routing_module_1.WishlistRoutingModule,
            shared_1.ContentHeaderModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            shared_2.ProductBoxModule
        ],
        declarations: [wishlist_component_1.WishlistComponent]
    })
], WishlistModule);
exports.WishlistModule = WishlistModule;
//# sourceMappingURL=wishlist.module.js.map