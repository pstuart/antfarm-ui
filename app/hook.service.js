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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var HookService = (function () {
    function HookService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost:8081/hooks'; // URL to web api
    }
    HookService.prototype.getHooks = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HookService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HookService.prototype.getHero = function (id) {
        return this.getHooks()
            .then(function (hooks) { return hooks.find(function (hook) { return hook.id === id; }); });
    };
    HookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HookService);
    return HookService;
}());
exports.HookService = HookService;
//# sourceMappingURL=hook.service.js.map