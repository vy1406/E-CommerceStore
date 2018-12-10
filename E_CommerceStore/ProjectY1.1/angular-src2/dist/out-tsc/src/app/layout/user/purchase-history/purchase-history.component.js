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
var PurchaseHistoryComponent = (function () {
    function PurchaseHistoryComponent(authService) {
        this.authService = authService;
        this.history = [];
        this.isDesc = false;
    }
    PurchaseHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getHistory().subscribe(function (data) {
            //console.log(data);
            if (data.success) {
                _this.history = data.answer;
            }
            else {
                console.log(data.err);
            }
        });
    };
    PurchaseHistoryComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    return PurchaseHistoryComponent;
}());
PurchaseHistoryComponent = __decorate([
    core_1.Component({
        selector: 'app-purchase-history',
        templateUrl: './purchase-history.component.html',
        styleUrls: ['./purchase-history.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [shared_1.AuthService])
], PurchaseHistoryComponent);
exports.PurchaseHistoryComponent = PurchaseHistoryComponent;
//# sourceMappingURL=purchase-history.component.js.map