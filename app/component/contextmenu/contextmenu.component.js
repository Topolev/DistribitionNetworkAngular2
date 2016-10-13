/**
 * Created by Vladimir on 11.10.2016.
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
var core_1 = require('@angular/core');
var ContextmenuComponent = (function () {
    function ContextmenuComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ContextmenuComponent.prototype.ngOnInit = function () {
        this.contextMenu = $(this.element.nativeElement).find('.context-menu');
        this.contextMenu.css('display', 'none');
    };
    ContextmenuComponent.prototype.executeLink = function (link, $event) {
        link.click();
        this.closeContextMenu($event);
        $event.preventDefault();
    };
    ContextmenuComponent.prototype.showContextMenu = function ($event) {
        this.contextMenu.css('display', 'inline-block');
        this.contextMenu.offset({ top: $event.clientY, left: $event.clientX });
        console.log($event.clientX + " " + $event.clientY);
        $event.preventDefault();
    };
    ContextmenuComponent.prototype.closeContextMenu = function ($event) {
        this.contextMenu.css('display', 'none');
        $event.preventDefault();
    };
    ContextmenuComponent.prototype.onClick = function ($event) {
        var clickedInside = this.element.nativeElement.contains($event.target);
        if (!clickedInside) {
            this.closeContextMenu($event);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ContextmenuComponent.prototype, "links", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], ContextmenuComponent.prototype, "onClick", null);
    ContextmenuComponent = __decorate([
        core_1.Component({
            selector: 'context-menu',
            template: "\n        <a href=\"#\" (contextmenu) = \"showContextMenu($event)\">Show context menu</a>\n        <ul class=\"context-menu\">\n            <li *ngFor = \"let link of links\">\n                <a (click) = \"executeLink(link, $event)\">{{link.title}}</a>\n            </li>\n        </ul>\n    ",
            styleUrls: ['./app/component/contextmenu/contextmenu.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], ContextmenuComponent);
    return ContextmenuComponent;
}());
exports.ContextmenuComponent = ContextmenuComponent;
//# sourceMappingURL=contextmenu.component.js.map