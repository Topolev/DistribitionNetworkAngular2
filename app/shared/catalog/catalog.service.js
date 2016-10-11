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
 * Created by Vladimir on 09.10.2016.
 */
var core_1 = require('@angular/core');
var catalog_table_1 = require('./catalog.table');
var CatalogService = (function () {
    function CatalogService() {
        this.catalogTable = new catalog_table_1.CatalogTableCable();
    }
    CatalogService.prototype.getCatalog = function () {
        return this.catalogTable;
    };
    CatalogService.prototype.getHeaders = function () {
        return this.catalogTable.headers;
    };
    CatalogService.prototype.getItems = function () {
        return this.catalogTable.items;
    };
    CatalogService.prototype.newItem = function () {
        var item = {};
        for (var _i = 0, _a = this.catalogTable.headers; _i < _a.length; _i++) {
            var field = _a[_i];
            item[field.innerName] = "";
        }
        this.catalogTable.items.push(item);
    };
    CatalogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CatalogService);
    return CatalogService;
}());
exports.CatalogService = CatalogService;
//# sourceMappingURL=catalog.service.js.map