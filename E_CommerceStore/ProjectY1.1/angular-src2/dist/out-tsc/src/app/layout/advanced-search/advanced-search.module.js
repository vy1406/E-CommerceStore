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
var advanced_search_component_1 = require("./advanced-search.component");
var advanced_search_routing_module_1 = require("./advanced-search-routing.module");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var shared_1 = require("../../shared");
var AdvancedSearchModule = (function () {
    function AdvancedSearchModule() {
    }
    return AdvancedSearchModule;
}());
AdvancedSearchModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            advanced_search_routing_module_1.AdvancedSearchRoutingModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            shared_1.ProductBoxModule,
        ],
        declarations: [advanced_search_component_1.AdvancedSearchComponent]
    })
], AdvancedSearchModule);
exports.AdvancedSearchModule = AdvancedSearchModule;
//# sourceMappingURL=advanced-search.module.js.map