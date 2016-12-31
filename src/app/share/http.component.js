"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_service_1 = require("../pages/login/http.service");
var MyHttp = (function () {
    function MyHttp(demoService) {
        this.demoService = demoService;
        this.demoPost = new http_service_1.Post(1, 'Demo Title', 'Demo Body');
        this.demoList = [];
        this.getPosts();
    }
    MyHttp.prototype.createPost = function () {
        this.demoService.createPost(this.demoPost);
    };
    MyHttp.prototype.getPosts = function () {
        var _this = this;
        this.demoService.getPosts().subscribe(function (posts) {
            _this.demoList = posts;
        });
    };
    return MyHttp;
}());
__decorate([
    core_1.Input()
], MyHttp.prototype, "demoPost", void 0);
__decorate([
    core_1.Input()
], MyHttp.prototype, "demoList", void 0);
MyHttp = __decorate([
    core_1.Component({
        selector: 'components'
    })
], MyHttp);
exports.MyHttp = MyHttp;
