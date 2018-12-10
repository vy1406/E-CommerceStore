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
var router_animations_1 = require("../../../router.animations");
var shared_1 = require("../../../shared");
var angular2_flash_messages_1 = require("angular2-flash-messages");
var router_1 = require("@angular/router");
var CategoryComponent = (function () {
    function CategoryComponent(flashMessage, router, categoryService) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.categoryService = categoryService;
        this.categories = [];
        this.isDesc = false;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getAllCategories().subscribe(function (data) {
            _this.categories = data.answer;
            //console.log(this.products);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CategoryComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    core_1.Component({
        selector: 'app-category',
        templateUrl: './category.component.html',
        styleUrls: ['./category.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [angular2_flash_messages_1.FlashMessagesService,
        router_1.Router,
        shared_1.CategoryService])
], CategoryComponent);
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map