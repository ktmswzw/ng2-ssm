import {Component, ViewEncapsulation, OnInit, Input} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {LoginService, Result} from "./login.service";
import {Md5} from 'ts-md5/dist/md5'
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login implements OnInit {

  @Input() user: Result ;
  public form:FormGroup;
  public telephone:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  ngOnInit() {
    Md5.hashStr('hello');
  }

  constructor(fb:FormBuilder,private service: LoginService,private router: Router) {
    this.form = fb.group({
      'telephone': ['', Validators.compose([Validators.required, Validators.minLength(11)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.telephone = this.form.controls['telephone'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    console.log("111");
    if (this.form.valid) {
      // your code goes here
      console.log(values);
      const lashPassword = values["password"]+"HHOO" as string;
      this.service.login(values["telephone"], Md5.hashStr(lashPassword) as string,"H5","").subscribe(user => {
        this.user = user;
        this.router.navigate(['/pages', ""]);
      },error => {
        console.log(error);
      });
    }
  }
}
