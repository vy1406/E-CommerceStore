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
var admin_tools_routing_module_1 = require("./admin-tools-routing.module");
var admin_tools_component_1 = require("./admin-tools.component");
var shared_1 = require("./../../shared");
var AdminToolsModule = (function () {
    function AdminToolsModule() {
    }
    return AdminToolsModule;
}());
AdminToolsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            admin_tools_routing_module_1.AdminToolsRoutingModule,
            shared_1.AdminHeaderModule
        ],
        declarations: [admin_tools_component_1.AdminToolsComponent]
    })
], AdminToolsModule);
exports.AdminToolsModule = AdminToolsModule;
//# sourceMappingURL=admin-tools.module.js.map