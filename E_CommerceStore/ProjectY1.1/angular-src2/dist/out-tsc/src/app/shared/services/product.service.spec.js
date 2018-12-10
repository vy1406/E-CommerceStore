"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var product_service_1 = require("./product.service");
describe('ProductService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [product_service_1.ProductService]
        });
    });
    it('should be created', testing_1.inject([product_service_1.ProductService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=product.service.spec.js.map