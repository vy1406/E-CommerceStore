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
var shared_1 = require("app/shared");
var routes = [
    {
        path: '', children: [
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule', canActivate: [shared_1.AuthGuard] },
            { path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistModule', canActivate: [shared_1.AuthGuard] },
            { path: 'purchase-history', loadChildren: './purchase-history/purchase-history.module#PurchaseHistoryModule', canActivate: [shared_1.AuthGuard] },
            { path: 'history-item/:id', loadChildren: './history-item/history-item.module#HistoryItemModule', canActivate: [shared_1.AuthGuard] },
        ]
    }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], UserRoutingModule);
exports.UserRoutingModule = UserRoutingModule;
//# sourceMappingURL=user-routing.module.js.map