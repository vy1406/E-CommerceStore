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
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.addProduct = function (data) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('Http://localhost:3000/products/add', data, options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.updateProduct = function (data) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('Http://localhost:3000/products/update', data, options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductById = function (id) {
        var data = {
            id: id
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/products/getById', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getAllProducts = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('Http://localhost:3000/products/getAll', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.removeProduct = function (product) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/products/remove', product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductsByCategory = function (categoryName) {
        var data = {
            categoryName: categoryName
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/products/getByCategory', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductsByKeyWord = function (keyWord) {
        var data = {
            keyWord: keyWord
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Http://localhost:3000/products/searchByKeyWord', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getDataFromProducts = function (products, callback) {
        var flags1 = [], categories = [];
        for (var i = 0; i < products.length; i++) {
            var tmp = {
                key: products[i].category,
                value: false
            };
            if (flags1[products[i].category])
                continue;
            flags1[products[i].category] = true;
            categories.push(tmp);
        }
        var flags2 = [], volumes = [];
        for (var i = 0; i < products.length; i++) {
            var tmp = {
                key: products[i].volume,
                value: false
            };
            if (flags2[products[i].volume])
                continue;
            flags2[products[i].volume] = true;
            volumes.push(tmp);
        }
        var flags3 = [], capacities = [];
        for (var i = 0; i < products.length; i++) {
            var tmp = {
                key: products[i].capacity,
                value: false
            };
            if (flags3[products[i].capacity])
                continue;
            flags3[products[i].capacity] = true;
            capacities.push(tmp);
        }
        var flags4 = [], origins = [];
        for (var i = 0; i < products.length; i++) {
            var tmp = {
                key: products[i].origin,
                value: false
            };
            if (flags4[products[i].origin])
                continue;
            flags4[products[i].origin] = true;
            origins.push(tmp);
        }
        var result = {
            categories: { values: categories, flags: flags1, filterApplied: 0 },
            volumes: { values: volumes, flags: flags2, filterApplied: 0 },
            capacities: { values: capacities, flags: flags3, filterApplied: 0 },
            origins: { values: origins, flags: flags4, filterApplied: 0 },
        };
        callback(result);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map