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
 * Created by Vladimir on 13.10.2016.
 */
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var child_component_1 = require('./child.component');
var CountdownViewChildParentComponent = (function () {
    function CountdownViewChildParentComponent() {
    }
    CountdownViewChildParentComponent.prototype.seconds = function () { return 0; };
    CountdownViewChildParentComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
        // but wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        setTimeout(function () { return _this.seconds = function () { return _this.timerComponent.seconds; }; }, 0);
    };
    CountdownViewChildParentComponent.prototype.start = function () { this.timerComponent.start(); };
    CountdownViewChildParentComponent.prototype.stop = function () { this.timerComponent.stop(); };
    __decorate([
        core_1.ViewChild(child_component_1.CountdownTimerComponent), 
        __metadata('design:type', child_component_1.CountdownTimerComponent)
    ], CountdownViewChildParentComponent.prototype, "timerComponent", void 0);
    CountdownViewChildParentComponent = __decorate([
        core_2.Component({
            selector: 'countdown-parent-vc',
            template: "\n  <h3>Countdown to Liftoff (via ViewChild)</h3>\n  <button (click)=\"start()\">Start</button>\n  <button (click)=\"stop()\">Stop</button>\n  <div class=\"seconds\">{{ seconds() }}</div>\n  <countdown-timer></countdown-timer>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CountdownViewChildParentComponent);
    return CountdownViewChildParentComponent;
}());
exports.CountdownViewChildParentComponent = CountdownViewChildParentComponent;
//# sourceMappingURL=parent.component.js.map