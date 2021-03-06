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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var hook_service_1 = require('../hook/hook.service');
var HookInterfaceMetadataComponent = (function () {
    function HookInterfaceMetadataComponent(hookService, route, location) {
        this.hookService = hookService;
        this.route = route;
        this.location = location;
    }
    HookInterfaceMetadataComponent.prototype.ngOnInit = function () { };
    HookInterfaceMetadataComponent = __decorate([
        core_1.Component({
            selector: 'hook-interface-metadata',
            template: "\n        <div *ngIf=\"hookService.getInterface()\">\n\n            <div *ngIf=\"hookService.getInterface().metadata\">\n                <h4>Metadata properties</h4>\n                    \n                <ul class=\"list-group\" *ngIf=\"hookService.getInterface().metadata.interfaceProperties\">                    \n                    <li *ngFor=\"let prop of hookService.getInterface().metadata.interfaceProperties\" class=\"list-group-item\">\n                        <strong>{{prop.key}}:</strong> {{prop.value}}\n                    </li>\n                </ul>\n            </div>\n            \n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [hook_service_1.HookService, router_1.ActivatedRoute, common_1.Location])
    ], HookInterfaceMetadataComponent);
    return HookInterfaceMetadataComponent;
}());
exports.HookInterfaceMetadataComponent = HookInterfaceMetadataComponent;
//# sourceMappingURL=hook-interface-metadata.component.js.map