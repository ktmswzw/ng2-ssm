'use strict';
import {User} from "../entity/User";
import {GlobalState} from "../global.state";
import {Injectable} from "@angular/core";
import {CoolLocalStorage} from "angular2-cool-storage";

@Injectable()
export class GlobalData {
  localStorage: CoolLocalStorage;
  constructor(private _state:GlobalState,localStorage: CoolLocalStorage) {
      this.localStorage = localStorage;
      this._state.subscribe("user.login",(userData) => {
      this.localStorage.setObject('user.login',userData);
    })
  }

  public getUser(): User {
    let user:User = undefined;
    try {
      user = this.localStorage.getObject('user.login');
    }
    catch (e){
      if(e instanceof RangeError){
        console.info("login storage is error");
      }
    }
    finally
    {
      return user;
    }
  }
}
