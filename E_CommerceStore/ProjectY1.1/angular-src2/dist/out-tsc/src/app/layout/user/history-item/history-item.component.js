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
var shared_2 = require("../../../shared");
var router_1 = require("@angular/router");
var HistoryItemComponent = (function () {
    function HistoryItemComponent(authService, route) {
        this.authService = authService;
        this.route = route;
        this.historyItem = new shared_1.HistoryItem();
    }
    HistoryItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.authService.getHistoryItem(this.id).subscribe(function (data) {
            if (data.success)
                _this.historyItem = data.answer;
            else
                console.log(data.msg);
        });
    };
    return HistoryItemComponent;
}());
HistoryItemComponent = __decorate([
    core_1.Component({
        selector: 'app-history-item',
        templateUrl: './history-item.component.html',
        styleUrls: ['./history-item.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [shared_2.AuthService, router_1.ActivatedRoute])
], HistoryItemComponent);
exports.HistoryItemComponent = HistoryItemComponent;
//# sourceMappingURL=history-item.component.js.map