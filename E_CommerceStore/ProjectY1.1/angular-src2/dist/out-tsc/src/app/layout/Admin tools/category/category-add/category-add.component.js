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
var CategoryAddComponent = (function () {
    function CategoryAddComponent(validateService, flashMessage, router, fb, categoryService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.fb = fb;
        this.categoryService = categoryService;
        this.formData = new FormData;
        this.form = this.fb.group({
            categoryName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            pic: [''],
        });
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
    };
    CategoryAddComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            console.log("upload file attempt");
            var file = fileList[0];
            this.formData.append('pic', file, file.name);
        }
    };
    CategoryAddComponent.prototype.onAddSubmit = function () {
        var _this = this;
        console.log("Form status: " + this.form.status);
        // Required Fields
        if (this.form.status == "INVALID") {
            this.form.controls['categoryName'].markAsDirty();
            return false;
        }
        this.formData = this.validateService.buildFormData(this.form, this.formData);
        // Add product
        this.categoryService.addCategory(this.formData).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Category has been added', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/admin-tools/category']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
                _this.router.navigate(['/admin-tools/category/add']);
            }
        });
    };
    return CategoryAddComponent;
}());
CategoryAddComponent = __decorate([
    core_1.Component({
        selector: 'app-category-add',
        templateUrl: './category-add.component.html',
        styleUrls: ['./category-add.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [shared_1.ValidateService,
        angular2_flash_messages_1.FlashMessagesService,
        router_1.Router,
        forms_1.FormBuilder,
        shared_1.CategoryService])
], CategoryAddComponent);
exports.CategoryAddComponent = CategoryAddComponent;
//# sourceMappingURL=category-add.component.js.map