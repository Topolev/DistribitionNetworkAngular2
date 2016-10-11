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
var core_1 = require("@angular/core");
var catalog_service_1 = require('../../../shared/catalog/catalog.service');
var CatalogItemsComponent = (function () {
    function CatalogItemsComponent(catalogService) {
        this.catalogService = catalogService;
    }
    CatalogItemsComponent.prototype.ngOnInit = function () {
        this.headers = this.catalogService.getHeaders();
        this.items = this.catalogService.getItems();
    };
    CatalogItemsComponent.prototype.delete = function () {
        console.log("DELETE ITEM");
    };
    CatalogItemsComponent = __decorate([
        core_1.Component({
            selector: 'tbody[catalog-items]',
            templateUrl: './app/component/catalog/items/catalog-items.component.html',
            styleUrls: ['./app/component/catalog/items/catalog-items.component.css'],
        }), 
        __metadata('design:paramtypes', [catalog_service_1.CatalogService])
    ], CatalogItemsComponent);
    return CatalogItemsComponent;
}());
exports.CatalogItemsComponent = CatalogItemsComponent;
//# sourceMappingURL=catalog-items.component.js.map