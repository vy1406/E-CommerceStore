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
var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined)
            return false;
        else
            return true;
    };
    ValidateService.prototype.validateEmail = function (c) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(c.value)) {
            return { 'emailInvalid': "*Please use valid email address" };
        }
        return null;
    };
    ValidateService.prototype.validatePasswordRep = function (password, passwordRep) {
        return function (group) {
            var password = group.controls['password'];
            var confirmPassword = group.controls['passwordRep'];
            if (password.value != confirmPassword.value) {
                return { 'passwordRepInvalid': true };
            }
            ;
            return null;
        };
    };
    ValidateService.prototype.getFormValidationErrors = function (form, frmControl, nameDisplay, sign) {
        var msg = "";
        var flag = false;
        Object.keys(form.controls).forEach(function (key) {
            var controlErrors = form.get(key).errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(function (keyError) {
                    //console.log('Key control: ' + key + ', value: ' + form.controls[key].value + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
                    if (flag == false && frmControl == key && keyError == "required") {
                        flag = true;
                        msg = "*" + nameDisplay + " is required.";
                    }
                    else if (flag == false && frmControl == key && keyError == "minlength") {
                        flag = true;
                        msg = "*" + nameDisplay + " must be at least " + controlErrors[keyError].requiredLength + " characters long.";
                    }
                    else if (flag == false && frmControl == key && keyError == "min") {
                        flag = true;
                        msg = "*" + nameDisplay + " must be minimum " + controlErrors[keyError].min + sign;
                    }
                    else if (flag == false && frmControl == key && keyError == "max") {
                        flag = true;
                        msg = "*" + nameDisplay + " must be maximum " + controlErrors[keyError].max + sign;
                    }
                    else if (flag == false && frmControl == key) {
                        flag = true;
                        msg = controlErrors[keyError];
                    }
                });
            }
        });
        return msg;
    };
    ValidateService.prototype.buildFormData = function (form, formData) {
        Object.keys(form.controls).forEach(function (key) {
            if (key != 'pic') {
                //console.log(key + ":" + form.controls[key].value);
                formData.append(key, form.controls[key].value);
            }
        });
        return formData;
    };
    return ValidateService;
}());
ValidateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ValidateService);
exports.ValidateService = ValidateService;
//# sourceMappingURL=validate.service.js.map