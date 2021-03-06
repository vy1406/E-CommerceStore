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
var history_item_routing_module_1 = require("./history-item-routing.module");
var history_item_component_1 = require("./history-item.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var shared_1 = require("../../../shared");
var shared_2 = require("../../../shared");
var HistoryItemModule = (function () {
    function HistoryItemModule() {
    }
    return HistoryItemModule;
}());
HistoryItemModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            history_item_routing_module_1.HistoryItemRoutingModule,
            shared_1.ContentHeaderModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            shared_2.SharedPipesModule,
            forms_1.FormsModule
        ],
        declarations: [history_item_component_1.HistoryItemComponent]
    })
], HistoryItemModule);
exports.HistoryItemModule = HistoryItemModule;
//# sourceMappingURL=history-item.module.js.map