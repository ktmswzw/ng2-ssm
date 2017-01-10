import {Component, ViewEncapsulation} from '@angular/core';
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from "@angular/router";
import {ToastyService, ToastyConfig,ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./style-default.css')],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <ng2-toasty [position]="'top-center'"></ng2-toasty>
      <ng2-slim-loading-bar></ng2-slim-loading-bar>
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://akveo.com">{{title}}</a> 2016</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {
  title = "";
  private sub: any;


  constructor(private router: Router,
              private slimLoader: SlimLoadingBarService,
              private toastyService:ToastyService,
              private toastyConfig: ToastyConfig) {

    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Loading start1');
        this.slimLoader.start();
      }
      else if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) {
        console.log('Loading complete1');
        this.slimLoader.complete();
        this.addToast();
      }
    }, (error: any) => {
      console.log('Loading complete2');
      this.slimLoader.complete();
    });
    this.toastyConfig.theme = 'default';
  }

  addToast() {
    // Just add default Toast with title only
    this.toastyService.default('Hi there');
    // Or create the instance of ToastOptions
    var toastOptions:ToastOptions = {
      title: "My title",
      msg: "The message",
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast:ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function(toast:ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };
    // Add see all possible types in one shot
    this.toastyService.info(toastOptions);
    this.toastyService.success(toastOptions);
    this.toastyService.wait(toastOptions);
    this.toastyService.error(toastOptions);
    this.toastyService.warning(toastOptions);
  }

  ngOnInit() {
    this.title = '123123';
  }


  ngOnDestroy(): any {
    this.sub.unsubscribe();
  }

}
