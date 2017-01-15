import {Component, ViewEncapsulation} from '@angular/core';
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from "@angular/router";
import {ToastyService} from 'ng2-toasty';
import {GlobalState} from "../global.state";
import {GlobalData} from "../share/globals";
import {User} from "../entity/User";

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./style-default.css')],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div  class="al-main">
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
  isMenuCollapsed: boolean = true;

  constructor(private router: Router,
              private slimLoader: SlimLoadingBarService,
              private toastyService:ToastyService,
              private _globalData: GlobalData,
              private _state:GlobalState) {

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
        this._state.notifyDataChanged('menu.isCollapsed',true);
        this.timeout();
      }
    }, (error: any) => {
      console.log('Loading complete2');
      this.slimLoader.complete();
    });
  }

  private timeout(){
    if(this._globalData.getUser() instanceof User){
      this.toastyService.error("登陆超时");
      setTimeout(() => {
        this.router.navigateByUrl('/login');
      }, 3000);

    }
  }

  ngOnInit() {
    this.title = '123123';
  }


  ngOnDestroy(): any {
    this.sub.unsubscribe();
  }

}
