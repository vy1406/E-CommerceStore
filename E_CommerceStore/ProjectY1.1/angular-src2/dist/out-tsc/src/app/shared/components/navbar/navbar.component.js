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
var router_1 = require("@angular/router");
var services_1 = require("../../services");
var angular2_flash_messages_1 = require("angular2-flash-messages");
var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage, sharedService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.sharedService = sharedService;
        this.pushRightClass = 'push-right';
        this.getUsersName();
        sharedService.changeEmitted$.subscribe(function (text) {
            _this.getUsersName();
        });
        this.router.events.subscribe(function (val) {
            if (val instanceof router_1.NavigationEnd && window.innerWidth <= 992 && _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    NavbarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    NavbarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logOut();
        this.getUsersName();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.getUsersName = function () {
        this.name = this.authService.getUserName();
        return this.name;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.scss']
    }),
    __metadata("design:paramtypes", [services_1.AuthService,
        router_1.Router,
        angular2_flash_messages_1.FlashMessagesService,
        services_1.SharedService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map