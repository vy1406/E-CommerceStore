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
var category_routing_module_1 = require("./category-routing.module");
var category_component_1 = require("./category.component");
var shared_1 = require("./../../../shared");
var shared_2 = require("./../../../shared");
var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            category_routing_module_1.CategoryRoutingModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            shared_1.AdminHeaderModule,
            shared_2.SharedPipesModule
        ],
        declarations: [category_component_1.CategoryComponent]
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=category.module.js.map