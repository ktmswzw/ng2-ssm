"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require('./app.loader.ts');
var core_1 = require('@angular/core');
var services_1 = require('./theme/services');
var theme_constants_1 = require('./theme/theme.constants');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var app_menu_1 = require('./app.menu');
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(_state, _imageLoader, _spinner, toastyConfig, router, _config, _menuService, viewContainerRef) {
        var _this = this;
        this._state = _state;
        this._imageLoader = _imageLoader;
        this._spinner = _spinner;
        this.toastyConfig = toastyConfig;
        this.router = router;
        this._config = _config;
        this._menuService = _menuService;
        this.viewContainerRef = viewContainerRef;
        this.isMenuCollapsed = false;
        this._menuService.updateMenuByRoutes(app_menu_1.MENU);
        this._fixModals();
        this._loadImages();
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
        this.toastyConfig.theme = 'default';
        this.addToast();
    }
    App.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        services_1.BaThemePreloader.load().then(function (values) {
            _this._spinner.hide();
        });
    };
    App.prototype._loadImages = function () {
        // register some loaders
        services_1.BaThemePreloader.registerLoader(this._imageLoader.load(theme_constants_1.layoutPaths.images.root + 'sky-bg.jpg'));
    };
    //
    App.prototype.addToast = function () {
        // Just add default Toast with title only
        // this.toastyService.default('Hi there');
        // Or create the instance of ToastOptions
        var toastOptions = {
            title: "My title222",
            msg: "The message22",
            showClose: true,
            timeout: 3000,
            theme: 'default',
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        // this.toastyService.info(toastOptions);
        // this.toastyService.success(toastOptions);
        // this.toastyService.wait(toastOptions);
        // this.toastyService.error(toastOptions);
        // this.toastyService.warning(toastOptions);
    };
    App.prototype._fixModals = function () {
        ng2_bootstrap_1.ComponentsHelper.prototype.getRootViewContainerRef = function () {
            // https://github.com/angular/angular/issues/9293
            if (this.root) {
                return this.root;
            }
            var comps = this.applicationRef.components;
            if (!comps.length) {
                throw new Error("ApplicationRef instance not found");
            }
            try {
                /* one more ugly hack, read issue above for details */
                var rootComponent = this.applicationRef._rootComponents[0];
                this.root = rootComponent._component.viewContainerRef;
                return this.root;
            }
            catch (e) {
                throw new Error("ApplicationRef instance not found");
            }
        };
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [require('normalize.css'), require('./app.scss')],
            template: "\n    <main [ngClass]=\"{'menu-collapsed': isMenuCollapsed}\" baThemeRun>\n      <div class=\"additional-bg\"></div>\n      <router-outlet></router-outlet>\n    </main>\n  "
        })
    ], App);
    return App;
}());
exports.App = App;
