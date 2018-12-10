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
var router_animations_1 = require("../../../../router.animations");
var shared_1 = require("../../../../shared");
var angular2_flash_messages_1 = require("angular2-flash-messages");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var shared_2 = require("../../../../shared");
var CategoryRemoveComponent = (function () {
    function CategoryRemoveComponent(flashMessage, router, categoryService, route) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.categoryService = categoryService;
        this.route = route;
        this.category = new shared_2.Category();
    }
    CategoryRemoveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        // Get category object from serve
        this.categoryService.getCategoryById(this.id).subscribe(function (data) {
            _this.category = data.answer;
            if (_this.category == null) {
                _this.router.navigate(['/admin-tools/category']);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Remove category
    CategoryRemoveComponent.prototype.onClickRemoveConfirm = function () {
        var _this = this;
        this.categoryService.removeCategory(this.category).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Category has been removed', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/admin-tools/category']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
                _this.router.navigate(['/admin-tools/category/category-remove', _this.id]);
            }
        });
    };
    return CategoryRemoveComponent;
}());
CategoryRemoveComponent = __decorate([
    core_1.Component({
        selector: 'app-category-remove',
        templateUrl: './category-remove.component.html',
        styleUrls: ['./category-remove.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [angular2_flash_messages_1.FlashMessagesService,
        router_1.Router,
        shared_1.CategoryService,
        router_2.ActivatedRoute])
], CategoryRemoveComponent);
exports.CategoryRemoveComponent = CategoryRemoveComponent;
//# sourceMappingURL=category-remove.component.js.map