'use strict';
import {User} from "../entity/User";
import {GlobalState} from "../global.state";
import {Injectable} from "@angular/core";
import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";

@Injectable()
export class GlobalData {
  @LocalStorage()
  public _user: User = undefined;

  constructor(private _state:GlobalState) {
    this._state.subscribe("user.login",(userState) => {
      this._user = userState ;
      console.info(this._user.nickname);
    })
  }

}
