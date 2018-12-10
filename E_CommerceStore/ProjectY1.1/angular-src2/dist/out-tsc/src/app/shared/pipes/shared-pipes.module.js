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
var filter_pipe_1 = require("./filter.pipe");
var order_by_pipe_1 = require("./order-by.pipe");
var capitalize_pipe_1 = require("./capitalize.pipe");
var SharedPipesModule = (function () {
    function SharedPipesModule() {
    }
    return SharedPipesModule;
}());
SharedPipesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [filter_pipe_1.FilterPipe, order_by_pipe_1.OrderByPipe, capitalize_pipe_1.CapitalizePipe],
        exports: [filter_pipe_1.FilterPipe, order_by_pipe_1.OrderByPipe, capitalize_pipe_1.CapitalizePipe]
    })
], SharedPipesModule);
exports.SharedPipesModule = SharedPipesModule;
//# sourceMappingURL=shared-pipes.module.js.map