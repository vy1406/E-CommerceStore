"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var core_1 = require("@ngx-translate/core");
var admin_tools_component_1 = require("./admin-tools.component");
describe('AdminToolsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                testing_2.RouterTestingModule,
                ng_bootstrap_1.NgbDropdownModule.forRoot(),
                core_1.TranslateModule.forRoot(),
            ],
            declarations: [
                admin_tools_component_1.AdminToolsComponent,
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(admin_tools_component_1.AdminToolsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-tools.component.spec.js.map