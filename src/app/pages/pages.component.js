"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var Pages = (function () {
    function Pages(router, slimLoader, toastyService, _globalData, _state) {
        var _this = this;
        this.router = router;
        this.slimLoader = slimLoader;
        this.toastyService = toastyService;
        this._globalData = _globalData;
        this._state = _state;
        this.title = "";
        this.isMenuCollapsed = true;
        this.sub = this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                console.log('Loading start1');
                _this.slimLoader.start();
            }
            else if (event instanceof router_1.NavigationEnd ||
                event instanceof router_1.NavigationCancel ||
                event instanceof router_1.NavigationError) {
                console.log('Loading complete1');
                _this.slimLoader.complete();
                _this._state.notifyDataChanged('menu.isCollapsed', true);
                _this.timeout();
            }
        }, function (error) {
            console.log('Loading complete2');
            _this.slimLoader.complete();
        });
    }
    Pages.prototype.timeout = function () {
        var _this = this;
        if (this._globalData.getUser() == undefined) {
            this.toastyService.error("登陆超时");
            setTimeout(function () {
                _this.router.navigateByUrl('/login');
            }, 3000);
        }
    };
    Pages.prototype.ngOnInit = function () {
        this.title = '123123';
    };
    Pages.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    Pages = __decorate([
        core_1.Component({
            selector: 'pages',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [require('./style-default.css')],
            template: "\n    <ba-sidebar></ba-sidebar>\n    <ba-page-top></ba-page-top>\n    <div  class=\"al-main\">\n      <ng2-toasty [position]=\"'top-center'\"></ng2-toasty>\n      <ng2-slim-loading-bar></ng2-slim-loading-bar>\n      <div class=\"al-content\">\n        <ba-content-top></ba-content-top>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <footer class=\"al-footer clearfix\">\n      <div class=\"al-footer-right\">Created with <i class=\"ion-heart\"></i></div>\n      <div class=\"al-footer-main clearfix\">\n        <div class=\"al-copy\">&copy; <a href=\"http://akveo.com\">{{title}}</a> 2016</div>\n        <ul class=\"al-share clearfix\">\n          <li><i class=\"socicon socicon-facebook\"></i></li>\n          <li><i class=\"socicon socicon-twitter\"></i></li>\n          <li><i class=\"socicon socicon-google\"></i></li>\n          <li><i class=\"socicon socicon-github\"></i></li>\n        </ul>\n      </div>\n    </footer>\n    <ba-back-top position=\"200\"></ba-back-top>\n    "
        })
    ], Pages);
    return Pages;
}());
exports.Pages = Pages;
