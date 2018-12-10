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
var forms_1 = require("@angular/forms");
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var SignupComponent = (function () {
    function SignupComponent(validateService, flashMessage, authService, router, fb) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.form = this.fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            email: ['', [forms_1.Validators.required, this.validateService.validateEmail]],
            password: ['', forms_1.Validators.required],
            passwordRep: ['', forms_1.Validators.required]
        }, { validator: this.validateService.validatePasswordRep('password', 'passwordRep') });
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log("Form status: " + this.form.status);
        // Required Fields
        if (this.form.status == "INVALID") {
            this.form.controls['name'].markAsDirty();
            this.form.controls['email'].markAsDirty();
            this.form.controls['password'].markAsDirty();
            this.form.controls['passwordRep'].markAsDirty();
            return false;
        }
        var user = {
            name: this.form.controls['name'].value,
            email: this.form.controls['email'].value,
            password: this.form.controls['password'].value
        };
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            console.log("in registerUser");
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/signup']);
            }
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.scss'],
        animations: [router_animations_1.routerTransition()]
    }),
    __metadata("design:paramtypes", [shared_1.ValidateService,
        angular2_flash_messages_1.FlashMessagesService,
        shared_1.AuthService,
        router_1.Router,
        forms_1.FormBuilder])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map