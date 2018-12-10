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
var forms_1 = require("@angular/forms");
var purchase_history_routing_module_1 = require("./purchase-history-routing.module");
var purchase_history_component_1 = require("./purchase-history.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var shared_1 = require("../../../shared");
var shared_2 = require("../../../shared");
var PurchaseHistoryModule = (function () {
    function PurchaseHistoryModule() {
    }
    return PurchaseHistoryModule;
}());
PurchaseHistoryModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            purchase_history_routing_module_1.PurchaseHistoryRoutingModule,
            shared_1.ContentHeaderModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            shared_2.SharedPipesModule,
            forms_1.FormsModule
        ],
        declarations: [purchase_history_component_1.PurchaseHistoryComponent]
    })
], PurchaseHistoryModule);
exports.PurchaseHistoryModule = PurchaseHistoryModule;
//# sourceMappingURL=purchase-history.module.js.map