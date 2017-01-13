'use strict';
import {User} from "../entity/User";
import {GlobalState} from "../global.state";
import {Injectable} from "@angular/core";
import {CoolLocalStorage} from "angular2-cool-storage";

@Injectable()
export class GlobalData {
  localStorage: CoolLocalStorage;
  user: User = undefined;
  constructor(private _state:GlobalState,localStorage: CoolLocalStorage) {
    this.localStorage = localStorage;
    this._state.subscribe("user.login",(userData) => {
      this.user = userData;
      this.localStorage.setItem('user.login',this.user.token);

      console.info(localStorage.getItem('user.login'));
      console.info(this.localStorage.getItem('user.login'));
    })
  }



}
