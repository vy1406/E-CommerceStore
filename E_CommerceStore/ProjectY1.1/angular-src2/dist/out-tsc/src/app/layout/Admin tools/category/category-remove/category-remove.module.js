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
var category_remove_routing_module_1 = require("./category-remove-routing.module");
var category_remove_component_1 = require("./category-remove.component");
var shared_1 = require("./../../../../shared");
var CategoryRemoveModule = (function () {
    function CategoryRemoveModule() {
    }
    return CategoryRemoveModule;
}());
CategoryRemoveModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            category_remove_routing_module_1.CategoryRemoveRoutingModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            shared_1.AdminHeaderModule
        ],
        declarations: [category_remove_component_1.CategoryRemoveComponent]
    })
], CategoryRemoveModule);
exports.CategoryRemoveModule = CategoryRemoveModule;
//# sourceMappingURL=category-remove.module.js.map