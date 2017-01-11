import {Component, ViewEncapsulation, OnInit, Input, Output} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {LoginService, LoginResult} from "./login.service";
import {Md5} from 'ts-md5/dist/md5'
import {Router} from "@angular/router";
import {User} from "../../entity/User";
import Globals = require('../../share/globals');
import {GlobalState} from "../../global.state";
import {ToastyService, ToastOptions} from "ng2-toasty";

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss'),require('../style-default.css')],
  template: require('./login.html'),
})
export class Login implements OnInit {

  public form:FormGroup;
  public username:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  ngOnInit() {
    // Md5.hashStr('hello');
  }

  constructor(fb:FormBuilder,
              private service: LoginService,
              private toastyService:ToastyService,
              private router: Router,
              private _state:GlobalState) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];

  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      console.log(values);
      // const lashPassword = values["password"]+"HHOO" as string;Md5.hashStr(lashPassword) as string
      this.service.login(values["username"], values["password"],"WEB","").subscribe(data => {
        console.log(data);
        console.log(data.apistatus);
        this._state.notifyDataChanged("user.login",data.result);

        if(data.apistatus == "0"){
          this.toastyService.success("登陆成功");
          setTimeout(() => {
            this.router.navigate(['/pages', ""]);
          }, 1000);
        }
        else{
          let toastOption:ToastOptions = {
            title: '登陆失败',
            msg: `${data.result.error_en+data.result.error}`,
            showClose: true,
            timeout: 2000,
            theme: 'default'
          };
          console.log(`${data.result.error_en+data.result.error}`);
          this.toastyService.error(toastOption);
        }
      },error => {
        console.log(error);
      });
    }
  }
}
