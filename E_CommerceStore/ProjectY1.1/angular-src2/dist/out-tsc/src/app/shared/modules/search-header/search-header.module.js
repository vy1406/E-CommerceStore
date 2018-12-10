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
var router_1 = require("@angular/router");
var search_header_component_1 = require("./search-header.component");
var shared_pipes_module_1 = require("../../pipes/shared-pipes.module");
var SearchHeaderModule = (function () {
    function SearchHeaderModule() {
    }
    return SearchHeaderModule;
}());
SearchHeaderModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            shared_pipes_module_1.SharedPipesModule
        ],
        declarations: [search_header_component_1.SearchHeaderComponent],
        exports: [search_header_component_1.SearchHeaderComponent]
    })
], SearchHeaderModule);
exports.SearchHeaderModule = SearchHeaderModule;
//# sourceMappingURL=search-header.module.js.map