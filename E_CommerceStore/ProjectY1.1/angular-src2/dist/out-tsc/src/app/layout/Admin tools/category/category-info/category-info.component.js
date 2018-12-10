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
var forms_1 = require("@angular/forms");
var router_2 = require("@angular/router");
var CategoryInfoComponent = (function () {
    function CategoryInfoComponent(validateService, flashMessage, router, fb, categoryService, route) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.fb = fb;
        this.categoryService = categoryService;
        this.route = route;
        this.formData = new FormData;
        this.form = this.fb.group({
            categoryName: ["", [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            pic: [''],
        });
    }
    CategoryInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        // Get category info by id
        this.categoryService.getCategoryById(this.id).subscribe(function (data) {
            _this.category = data.answer;
            if (_this.category == null) {
                _this.router.navigate(['/admin-tools/category']);
            }
            else {
                //console.log(this.category)
                _this.form.controls['categoryName'].setValue(_this.category.categoryName);
                _this.form.controls['pic'].setValue("");
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CategoryInfoComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.formData.append('pic', file, file.name);
        }
    };
    CategoryInfoComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        // Required Fields
        if (this.form.status == "INVALID") {
            this.form.controls['categoryName'].markAsDirty();
            return false;
        }
        this.formData.append("_id", this.category._id);
        this.formData = this.validateService.buildFormData(this.form, this.formData);
        // Update product
        this.categoryService.updateCategory(this.formData).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Category has been updated', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/admin-tools/category']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
                _this.router.navigate(['/admin-tools/category/info', _this.category._id]);
            }
        });
    };
    CategoryInfoComponent.prototype.onClickRemoveConfirm = function () {
        this.router.navigate(['/admin-tools/category/category-remove', this.category._id]);
    };
    return CategoryInfoComponent;
}());
CategoryInfoComponent = __decorate([
    core_1.Component({
        selector: 'app-category-info',
        templateUrl: './category-info.component.html',
        styleUrls: ['./category-info.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [shared_1.ValidateService,
        angular2_flash_messages_1.FlashMessagesService,
        router_1.Router,
        forms_1.FormBuilder,
        shared_1.CategoryService,
        router_2.ActivatedRoute])
], CategoryInfoComponent);
exports.CategoryInfoComponent = CategoryInfoComponent;
//# sourceMappingURL=category-info.component.js.map