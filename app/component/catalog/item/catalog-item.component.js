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
/**
 * Created by Vladimir on 11.10.2016.
 */
/**
 * Created by Vladimir on 11.10.2016.
 */
var core_1 = require("@angular/core");
var catalog_service_1 = require('../../../shared/catalog/catalog.service');
var CatalogItemComponent = (function () {
    function CatalogItemComponent(catalogService) {
        this.catalogService = catalogService;
    }
    CatalogItemComponent.prototype.ngOnInit = function () {
        this.headers = this.catalogService.getHeaders();
        this.items = this.catalogService.getItems();
    };
    CatalogItemComponent.prototype.checkItem = function () {
        this.item.checked = true;
    };
    CatalogItemComponent.prototype.uncheckItem = function () {
        this.item.checked = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CatalogItemComponent.prototype, "item", void 0);
    CatalogItemComponent = __decorate([
        core_1.Component({
            selector: 'tr[catalog-item]',
            templateUrl: './app/component/catalog/item/catalog-item.component.html',
        }), 
        __metadata('design:paramtypes', [catalog_service_1.CatalogService])
    ], CatalogItemComponent);
    return CatalogItemComponent;
}());
exports.CatalogItemComponent = CatalogItemComponent;
//# sourceMappingURL=catalog-item.component.js.map