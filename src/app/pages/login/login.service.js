"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var rest_service_1 = require('../../share/rest.service');
var LoginService = (function (_super) {
    __extends(LoginService, _super);
    function LoginService(http) {
        _super.call(this, http);
        this.http = http;
    }
    LoginService.prototype.requestInterceptor = function (req) {
        return req;
    };
    LoginService.prototype.responseInterceptor = function (res) {
        return res;
    };
    LoginService.prototype.login = function (username, password, device, deviceToken) {
        return null;
    };
    __decorate([
        rest_service_1.GET('/api/login'),
        rest_service_1.Produces(function (res) {
            res.headers.forEach(function (values, name) {
                // console.log(name, '=', values)
            });
        }),
        __param(0, rest_service_1.Query('username')),
        __param(1, rest_service_1.Query('password')),
        __param(2, rest_service_1.Query('device')),
        __param(3, rest_service_1.Query('deviceToken'))
    ], LoginService.prototype, "login", null);
    LoginService = __decorate([
        core_1.Injectable(),
        rest_service_1.DefaultHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    ], LoginService);
    return LoginService;
}(rest_service_1.RESTClient));
exports.LoginService = LoginService;
var LoginResult = (function () {
    function LoginResult(apistatus, result) {
        this.apistatus = apistatus;
        this.result = result;
    }
    return LoginResult;
}());
exports.LoginResult = LoginResult;
