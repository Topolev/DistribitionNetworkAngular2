/**
 * Created by Vladimir on 06.10.2016.
 */
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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require('@angular/forms');
var app_component_1 = require("./app.component");
var catalog_component_1 = require("./component/catalog/catalog.component");
var catalog_headers_component_1 = require("./component/catalog/headers/catalog-headers.component");
var catalog_items_component_1 = require("./component/catalog/items/catalog-items.component");
var catalog_item_component_1 = require("./component/catalog/item/catalog-item.component");
var test_component_1 = require("./component/test.component");
var contextmenu_component_1 = require("./component/contextmenu/contextmenu.component");
var contextmenu_directive_1 = require("./component/contextmenu/contextmenu.directive");
var parent_component_1 = require("./component/test/parent.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                catalog_headers_component_1.CatalogHeadersComponent,
                catalog_items_component_1.CatalogItemsComponent,
                catalog_item_component_1.CatalogItemComponent,
                catalog_component_1.CatalogComponent,
                contextmenu_component_1.ContextmenuComponent,
                contextmenu_directive_1.ContextmenuDirective,
                test_component_1.TestComponent,
                parent_component_1.CountdownViewChildParentComponent
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map