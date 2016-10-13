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
var contextmenu_component_1 = require("./contextmenu.component");
var ContextmenuDirective = (function () {
    function ContextmenuDirective() {
    }
    ContextmenuDirective.prototype.ngAfterViewInit = function () {
    };
    ContextmenuDirective.prototype.onContextMenu = function ($event) {
        this.contextComponent.showContextMenu($event);
    };
    __decorate([
        core_1.ViewChild(contextmenu_component_1.ContextmenuComponent), 
        __metadata('design:type', contextmenu_component_1.ContextmenuComponent)
    ], ContextmenuDirective.prototype, "contextComponent", void 0);
    __decorate([
        core_1.HostListener('contextmenu', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ContextmenuDirective.prototype, "onContextMenu", null);
    ContextmenuDirective = __decorate([
        core_1.Directive({
            selector: '[context-menu]',
        }), 
        __metadata('design:paramtypes', [])
    ], ContextmenuDirective);
    return ContextmenuDirective;
}());
exports.ContextmenuDirective = ContextmenuDirective;
//# sourceMappingURL=contextmenu.directive.js.map