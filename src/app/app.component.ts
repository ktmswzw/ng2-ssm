import {Routes, Router} from '@angular/router';
import './app.loader.ts';
import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';
import { BaThemeConfig } from './theme/theme.config';
import { BaMenuService } from './theme';
import {ComponentsHelper } from 'ng2-bootstrap';

import { MENU } from './app.menu';
import {ToastOptions, ToastData, ToastyConfig} from "ng2-toasty";
import {GlobalData} from "./share/globals";
import {User} from "./entity/User";
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('normalize.css'), require('./app.scss')],
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {

  isMenuCollapsed: boolean = false;
  systemMenu: any = undefined;

  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner,
              private toastyConfig: ToastyConfig,
              private router: Router,
              private _config: BaThemeConfig,
              private _data: GlobalData,
              private _menuService: BaMenuService,
              private viewContainerRef: ViewContainerRef) {

    this.initMenu();

    this._fixModals();

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

    this.toastyConfig.theme = 'default';
    this.addToast();
  }


  private initMenu(){
    console.info(this._data.getUser());
    if(this._data.getUser() == undefined ){
      console.info("----sys");
      this._menuService.updateMenuByRoutes(<Routes>MENU);
    }
    else {
      console.info("----default");
      this._menuService.updateMenuByRoutes(this._data.getUser().module_tree.children);
    }

  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }
  //
  private addToast() {
    // Just add default Toast with title only
    // this.toastyService.default('Hi there');
    // Or create the instance of ToastOptions
    let toastOptions:ToastOptions = {
      title: "My title222",
      msg: "The message22",
      showClose: true,
      timeout: 3000,
      theme: 'default',
      onAdd: (toast:ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function(toast:ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };


    // Add see all possible types in one shot
    // this.toastyService.info(toastOptions);
    // this.toastyService.success(toastOptions);
    // this.toastyService.wait(toastOptions);
    // this.toastyService.error(toastOptions);
    // this.toastyService.warning(toastOptions);
  }

  private _fixModals(): void {
    ComponentsHelper.prototype.getRootViewContainerRef = function () {
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
  }
}
