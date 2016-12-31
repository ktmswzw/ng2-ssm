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
var core_1 = require("@angular/core");
var rest_service_1 = require("../../share/rest.service");
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    HttpService.prototype.requestInterceptor = function (req) {
        return req;
    };
    HttpService.prototype.responseInterceptor = function (res) {
        return res;
    };
    HttpService.prototype.getPosts = function (userId) {
        return null;
    };
    HttpService.prototype.createPost = function (post) {
        return null;
    };
    return HttpService;
}(rest_service_1.RESTClient));
__decorate([
    rest_service_1.GET('/posts'),
    rest_service_1.Produces(function (res) {
        res.headers.forEach(function (values, name) {
            console.log(name, '=', values);
        });
    }),
    __param(0, rest_service_1.Query('$userId'))
], HttpService.prototype, "getPosts", null);
__decorate([
    rest_service_1.POST('/posts'),
    rest_service_1.Produces(),
    __param(0, rest_service_1.Body)
], HttpService.prototype, "createPost", null);
HttpService = __decorate([
    core_1.Injectable(),
    rest_service_1.BaseUrl('https://jsonplaceholder.typicode.com'),
    rest_service_1.DefaultHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
], HttpService);
exports.HttpService = HttpService;
var Post = (function () {
    function Post(userId, title, body, id) {
        this.userId = userId;
        this.title = title;
        this.body = body;
        this.id = id;
    }
    return Post;
}());
exports.Post = Post;
