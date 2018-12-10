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
var ProductAddComponent = (function () {
    function ProductAddComponent(validateService, flashMessage, router, fb, categoryService, countryService, productService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.fb = fb;
        this.categoryService = categoryService;
        this.countryService = countryService;
        this.productService = productService;
        this.countries = [];
        this.categories = [];
        this.formData = new FormData;
        this.form = this.fb.group({
            productName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            price: ['', [forms_1.Validators.required, forms_1.Validators.min(1)]],
            info: [''],
            pic: [''],
            category: ['', forms_1.Validators.required],
            volume: ['', [forms_1.Validators.required, forms_1.Validators.min(1), forms_1.Validators.max(100)]],
            origin: ['', forms_1.Validators.required],
            capacity: ['', [forms_1.Validators.required, forms_1.Validators.min(0.33), forms_1.Validators.max(2)]],
        });
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getAllCategories().subscribe(function (data) {
            _this.categories = data.answer;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.countryService.getAllCountries().subscribe(function (data) {
            _this.countries = data.answer;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProductAddComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            console.log("upload file attempt");
            var file = fileList[0];
            this.formData.append('pic', file, file.name);
        }
    };
    ProductAddComponent.prototype.onAddSubmit = function () {
        var _this = this;
        console.log("Form status: " + this.form.status);
        // Required Fields
        if (this.form.status == "INVALID") {
            this.form.controls['productName'].markAsDirty();
            this.form.controls['price'].markAsDirty();
            this.form.controls['category'].markAsDirty();
            this.form.controls['volume'].markAsDirty();
            this.form.controls['origin'].markAsDirty();
            this.form.controls['capacity'].markAsDirty();
            return false;
        }
        this.formData = this.validateService.buildFormData(this.form, this.formData);
        // Add product
        this.productService.addProduct(this.formData).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Product has been added', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/admin-tools/product']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
                _this.router.navigate(['/admin-tools/product/add']);
            }
        });
    };
    return ProductAddComponent;
}());
ProductAddComponent = __decorate([
    core_1.Component({
        selector: 'app-product-add',
        templateUrl: './product-add.component.html',
        styleUrls: ['./product-add.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [shared_1.ValidateService,
        angular2_flash_messages_1.FlashMessagesService,
        router_1.Router,
        forms_1.FormBuilder,
        shared_1.CategoryService,
        shared_1.CountryService,
        shared_1.ProductService])
], ProductAddComponent);
exports.ProductAddComponent = ProductAddComponent;
//# sourceMappingURL=product-add.component.js.map