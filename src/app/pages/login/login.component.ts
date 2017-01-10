import {Component, ViewEncapsulation, OnInit, Input, Output} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {LoginService, LoginResult} from "./login.service";
import {Md5} from 'ts-md5/dist/md5'
import {Router} from "@angular/router";
import {User} from "../../entity/User";
import Globals = require('../../share/globals');


@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login implements OnInit {

  @Input() result: LoginResult ;
  public form:FormGroup;
  public username:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  ngOnInit() {
    Md5.hashStr('hello');
  }

  constructor(fb:FormBuilder,private service: LoginService,private router: Router) {
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
      // your code goes here
      console.log(values);
      // const lashPassword = values["password"]+"HHOO" as string;Md5.hashStr(lashPassword) as string
      this.service.login(values["username"], values["password"],"WEB","").subscribe(data => {
        this.result = data;
        Globals.__USER = data.result;
        console.info(Globals.__USER.token);
        console.info("----");
        if(this.result.apistatus == "0"){
          this.router.navigate(['/pages', ""]);
        }
        else{

        }
      },error => {
        console.log(error);
      });
    }
  }
}
