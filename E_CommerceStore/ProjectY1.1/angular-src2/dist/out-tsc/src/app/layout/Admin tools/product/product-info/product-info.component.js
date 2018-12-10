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
var ProductInfoComponent = (function () {
    function ProductInfoComponent(validateService, flashMessage, router, fb, categoryService, countryService, productService, route) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.fb = fb;
        this.categoryService = categoryService;
        this.countryService = countryService;
        this.productService = productService;
        this.route = route;
        this.countries = [];
        this.categories = [];
        this.formData = new FormData;
        this.form = this.fb.group({
            productName: ["", [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            price: ["", [forms_1.Validators.required, forms_1.Validators.min(1)]],
            info: [''],
            pic: [''],
            category: ['', forms_1.Validators.required],
            volume: ['', [forms_1.Validators.required, forms_1.Validators.min(1), forms_1.Validators.max(100)]],
            origin: ['', forms_1.Validators.required],
            capacity: ['', [forms_1.Validators.required, forms_1.Validators.min(0.33), forms_1.Validators.max(2)]],
        });
    }
    ProductInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        // Get product info by id
        this.productService.getProductById(this.id).subscribe(function (data) {
            _this.product = data.answer;
            if (_this.product == null) {
                _this.router.navigate(['/admin-tools/product']);
            }
            else {
                //console.log(this.product)
                _this.form.controls['productName'].setValue(_this.product.productName);
                _this.form.controls['price'].setValue(_this.product.price);
                _this.form.controls['info'].setValue(_this.product.info);
                _this.form.controls['pic'].setValue("");
                _this.form.controls['category'].setValue(_this.product.category);
                _this.form.controls['volume'].setValue(_this.product.volume);
                _this.form.controls['origin'].setValue(_this.product.origin);
                _this.form.controls['capacity'].setValue(_this.product.capacity);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        // Get all categories for select
        this.categoryService.getAllCategories().subscribe(function (data) {
            _this.categories = data.answer;
        }, function (err) {
            console.log(err);
            return false;
        });
        // Get all countries for select
        this.countryService.getAllCountries().subscribe(function (data) {
            _this.countries = data.answer;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProductInfoComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.formData.append('pic', file, file.name);
        }
    };
    ProductInfoComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        //console.log("Form status: " + this.form.status);
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
        this.formData.append("_id", this.product._id);
        this.formData = this.validateService.buildFormData(this.form, this.formData);
        // Update product
        this.productService.updateProduct(this.formData).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Product has been updated', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/admin-tools/product']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                window.scrollTo(0, 0);
                _this.router.navigate(['/admin-tools/product/info', _this.product._id]);
            }
        });
    };
    ProductInfoComponent.prototype.onClickRemoveConfirm = function () {
        this.router.navigate(['/admin-tools/product/remove-confirm', this.product._id]);
    };
    return ProductInfoComponent;
}());
ProductInfoComponent = __decorate([
    core_1.Component({
        selector: 'app-product-info',
        templateUrl: './product-info.component.html',
        styleUrls: ['./product-info.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [shared_1.ValidateService,
        angular2_flash_messages_1.FlashMessagesService,
        router_1.Router,
        forms_1.FormBuilder,
        shared_1.CategoryService,
        shared_1.CountryService,
        shared_1.ProductService,
        router_2.ActivatedRoute])
], ProductInfoComponent);
exports.ProductInfoComponent = ProductInfoComponent;
//# sourceMappingURL=product-info.component.js.map