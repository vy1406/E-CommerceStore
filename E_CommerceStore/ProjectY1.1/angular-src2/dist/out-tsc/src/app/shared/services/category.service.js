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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.addCategory = function (data) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('Http://localhost:3000/categories/add', data, options)
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.updateCategory = function (data) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('Http://localhost:3000/categories/update', data, options)
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getAllCategories = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('Http://localhost:3000/categories/getAll', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getCategoryById = function (id) {
        var data = {
            id: id
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/categories/getById', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.removeCategory = function (category) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/categories/remove', category, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map