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
var shared_pipes_module_1 = require("../../pipes/shared-pipes.module");
var content_header_component_1 = require("./content-header.component");
var ContentHeaderModule = (function () {
    function ContentHeaderModule() {
    }
    return ContentHeaderModule;
}());
ContentHeaderModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            shared_pipes_module_1.SharedPipesModule
        ],
        declarations: [content_header_component_1.ContentHeaderComponent],
        exports: [content_header_component_1.ContentHeaderComponent]
    })
], ContentHeaderModule);
exports.ContentHeaderModule = ContentHeaderModule;
//# sourceMappingURL=content-header.module.js.map