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
var router_animations_1 = require("../../router.animations");
var shared_1 = require("../../shared");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AdvancedSearchComponent = (function () {
    function AdvancedSearchComponent(modalService, productService, categoryService) {
        this.modalService = modalService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.products = [];
        this.currentPageProducts = [];
        this.filteredProducts = [];
        this.productsData = {
            capacities: { values: [], flags: [], filterApplied: 0 },
            categories: { values: [], flags: [], filterApplied: 0 },
            origins: { values: [], flags: [], filterApplied: 0 },
            volumes: { values: [], flags: [], filterApplied: 0 }
        };
    }
    AdvancedSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllProducts().subscribe(function (data) {
            if (data.success) {
                _this.filteredProducts = _this.products = data.answer;
                _this.productService.getDataFromProducts(_this.products, function (result) {
                    _this.productsData = result;
                    _this.currentPage = 1;
                    _this.totalPages = Math.ceil(_this.products.length / 4);
                    _this.currentPageProducts = _this.filteredProducts.slice(0, 4);
                });
            }
            else
                console.log(data.msg);
        });
    };
    AdvancedSearchComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AdvancedSearchComponent.prototype.getDismissReason = function (reason) {
        this.applyFilter();
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // adds of remove filter
    AdvancedSearchComponent.prototype.checkField = function (item, type) {
        item.value = !item.value;
        if (type == "category") {
            if (this.productsData.categories.flags[item.key]) {
                this.productsData.categories.flags[item.key] = false;
                this.productsData.categories.filterApplied++;
            }
            else {
                this.productsData.categories.flags[item.key] = true;
                this.productsData.categories.filterApplied--;
            }
        }
        if (type == "volume") {
            if (this.productsData.volumes.flags[item.key]) {
                this.productsData.volumes.flags[item.key] = false;
                this.productsData.volumes.filterApplied++;
            }
            else {
                this.productsData.volumes.flags[item.key] = true;
                this.productsData.volumes.filterApplied--;
            }
        }
        if (type == "origin") {
            if (this.productsData.origins.flags[item.key]) {
                this.productsData.origins.flags[item.key] = false;
                this.productsData.origins.filterApplied++;
            }
            else {
                this.productsData.origins.flags[item.key] = true;
                this.productsData.origins.filterApplied--;
            }
        }
        if (type == "capacity") {
            if (this.productsData.capacities.flags[item.key]) {
                this.productsData.capacities.flags[item.key] = false;
                this.productsData.capacities.filterApplied++;
            }
            else {
                this.productsData.capacities.flags[item.key] = true;
                this.productsData.capacities.filterApplied--;
            }
        }
    };
    // load 4 new products to new page
    AdvancedSearchComponent.prototype.nextPage = function () {
        this.currentPageProducts = this.filteredProducts.slice(this.currentPage * 4, this.currentPage * 4 + 4);
        this.currentPage++;
    };
    // load 4 previous products to new page
    AdvancedSearchComponent.prototype.previousPage = function () {
        this.currentPage--;
        this.currentPageProducts = this.filteredProducts.slice((this.currentPage - 1) * 4, (this.currentPage - 1) * 4 + 4);
    };
    // rearrange the pages after filter apllied
    AdvancedSearchComponent.prototype.rearrangePages = function () {
        this.currentPage = 1;
        this.totalPages = Math.ceil(this.filteredProducts.length / 4);
        this.currentPageProducts = this.filteredProducts.slice(0, 4);
    };
    // applies the filter on product array and put it to filteredProducts array
    AdvancedSearchComponent.prototype.applyFilter = function () {
        this.filteredProducts = [];
        for (var i = 0; i < this.products.length; i++) {
            var flag = true;
            if (flag && this.productsData.categories.filterApplied > 0 && this.productsData.categories.flags[this.products[i].category])
                flag = false;
            if (flag && this.productsData.volumes.filterApplied > 0 && this.productsData.volumes.flags[this.products[i].volume])
                flag = false;
            if (flag && this.productsData.capacities.filterApplied > 0 && this.productsData.capacities.flags[this.products[i].capacity])
                flag = false;
            if (flag && this.productsData.origins.filterApplied > 0 && this.productsData.origins.flags[this.products[i].origin])
                flag = false;
            if (flag)
                this.filteredProducts.push(this.products[i]);
        }
        this.priceFilter();
    };
    // applies the price filter on filteredProducts array
    AdvancedSearchComponent.prototype.priceFilter = function () {
        var tmpArray = [];
        if (this.priceSelect == undefined) {
            this.sort();
            return;
        }
        for (var i = 0; i < this.filteredProducts.length; i++) {
            var price = parseInt(this.filteredProducts[i].price);
            if (price >= this.priceSelect && price <= (this.priceSelect + 100))
                tmpArray.push(this.filteredProducts[i]);
        }
        this.filteredProducts = tmpArray;
        this.sort();
    };
    AdvancedSearchComponent.prototype.clearFilter = function () {
        for (var i = 0; i < this.productsData.capacities.values.length; i++) {
            if (this.productsData.capacities.values[i].value) {
                this.productsData.capacities.values[i].value = false;
                this.productsData.capacities.flags[this.productsData.capacities.values[i].key] = true;
            }
        }
        this.productsData.capacities.filterApplied = 0;
        for (var i = 0; i < this.productsData.categories.values.length; i++) {
            if (this.productsData.categories.values[i].value) {
                this.productsData.categories.values[i].value = false;
                this.productsData.categories.flags[this.productsData.categories.values[i].key] = true;
            }
        }
        this.productsData.categories.filterApplied = 0;
        for (var i = 0; i < this.productsData.origins.values.length; i++) {
            if (this.productsData.origins.values[i].value) {
                this.productsData.origins.values[i].value = false;
                this.productsData.origins.flags[this.productsData.origins.values[i].key] = true;
            }
        }
        this.productsData.origins.filterApplied = 0;
        for (var i = 0; i < this.productsData.volumes.values.length; i++) {
            if (this.productsData.volumes.values[i].value) {
                this.productsData.volumes.values[i].value = false;
                this.productsData.volumes.flags[this.productsData.volumes.values[i].key] = true;
            }
        }
        this.productsData.volumes.filterApplied = 0;
        this.applyFilter();
    };
    // sort the array from lowest/highest
    AdvancedSearchComponent.prototype.sort = function () {
        var direction;
        if (this.sortSelect == undefined)
            direction = -1;
        else
            direction = this.sortSelect;
        this.filteredProducts.sort(function (a, b) {
            if (parseInt(a["price"]) < parseInt(b["price"])) {
                return 1 * direction;
            }
            else if (parseInt(a["price"]) > parseInt(b["price"])) {
                return -1 * direction;
            }
            else {
                return 0;
            }
        });
        this.rearrangePages();
    };
    return AdvancedSearchComponent;
}());
AdvancedSearchComponent = __decorate([
    core_1.Component({
        selector: 'app-advanced-search',
        templateUrl: './advanced-search.component.html',
        styleUrls: ['./advanced-search.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        shared_1.ProductService,
        shared_1.CategoryService])
], AdvancedSearchComponent);
exports.AdvancedSearchComponent = AdvancedSearchComponent;
//# sourceMappingURL=advanced-search.component.js.map