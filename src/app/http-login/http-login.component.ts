import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormValidators } from './../common/pwd.validator';
import { Http } from '@angular/http';
import { LoginService } from './../services/login.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-http-login',
  templateUrl: './http-login.component.html',
  styleUrls: ['./http-login.component.css']
})
export class HttpLoginComponent {
  //-------------------------------DECLARATIONS----------------------------------
  invalidLogin: boolean;
  //-----------------------FORM VALIDATION---------------------------------
  form = new FormGroup({
    userEmail: new FormControl('', [Validators.required,
    Validators.email,
    FormValidators.cannotContainSpace],
      FormValidators.shouldContainAt),
    password: new FormControl('', [Validators.required,
    Validators.minLength(8),
    Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-zA-Z]).*$'),
    FormValidators.cannotContainSpace])
  });


  //-------------------------------GETTERS----------------------------------
  get userEmail() {
    return this.form.get('userEmail');
  }

  get password() {
    return this.form.get('password');
  }


  //-------------------------------CONSTRUCTOR----------------------------------

  constructor(private router: Router, private loginService: LoginService) {

  }



  //-------------------------------SIGNIN FUNCTION----------------------------------
  signIn(form) {
    console.log(this.form.value, this.form.get('userEmail'), this.form.get('password'));

    this.loginService.signIn(form.value)
      .subscribe(result => {
        if (result['code'] === 200) {
          console.log(result['token']);
          this.invalidLogin = false;
          this.router.navigate(['/allUsers'])
        }
        else {
          this.invalidLogin = true;
        }
      }, (error: Response) => {
        if (error)
          alert('An Unexpected Error has Occured... ' + error);
        else {
          throw error;
        }
      });
  }



}
