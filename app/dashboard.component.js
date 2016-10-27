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
var hook_service_1 = require('./hook/hook.service');
var DashboardComponent = (function () {
    function DashboardComponent(hookService) {
        this.hookService = hookService;
        this.hooks = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.hookService.getHooks()
        //     .then(hooks => this.hooks = hooks.slice(1, 5));
    };
    DashboardComponent.prototype.gotoDetail = function (hook) { };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            // templateUrl: 'dashboard.component.html',
            template: "<div></div><antfarm-servers></antfarm-servers>"
        }), 
        __metadata('design:paramtypes', [hook_service_1.HookService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map