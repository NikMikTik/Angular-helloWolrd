import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormValidators } from './../common/pwd.validator';
import { Http } from '@angular/http';
import { LoginService } from './../services/login.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-http-login',
  templateUrl: './http-login.component.html',
  styleUrls: ['./http-login.component.css']
})
export class HttpLoginComponent {
  //-------------------------------DECLARATIONS----------------------------------
  invalidLogin: boolean;
  nonExistentUser: boolean;
  currentUserEmail: string;
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

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService
  ) {
    // console.log('qweqweqwe '+this.loginService.isLoggedIn());
    if (this.loginService.isLoggedIn())
      this.router.navigate(['dashboard']);
  }



  //-------------------------------SIGNIN FUNCTION----------------------------------
  signIn(form) {
  
    this.loginService.signIn(form.value)
      .subscribe(result => {
        if (result['code'] === 200) {
          this.currentUserEmail = this.form.get('userEmail').value;

          localStorage.setItem('token', result['token']);
          // localStorage.setItem('user', this.currentUserEmail);

          // this.loginService.setUserEmail(this.currentUserEmail);

          this.invalidLogin = false;
          this.nonExistentUser = false;
          console.log(this.route.snapshot.queryParamMap.get('returnUrl'));
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl||'dashboard']);
        }
        else if (result['code'] === 403) {
          this.nonExistentUser = true;
          this.invalidLogin = false;

        }
        else {
          this.invalidLogin = true;
          this.nonExistentUser = false;

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
