import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormValidators } from './../common/pwd.validator';
import { Http } from '@angular/http';
import { LoginService } from './../services/login.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { ResetService } from 'src/app/services/reset.service';
@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent {
PwdNotMatching:boolean;

  //-----------------------FORM VALIDATION---------------------------------

  resetPwdForm = new FormGroup({
    password: new FormControl('', [Validators.required,
      Validators.minLength(8),
      Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-zA-Z]).*$'),
      FormValidators.cannotContainSpace]),
      confirmPassword: new FormControl('', [Validators.required,
        Validators.minLength(8),
        Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-zA-Z]).*$'),
        FormValidators.cannotContainSpace])
  });

  //-------------------------------GETTERS----------------------------------

  get password() {
    return this.resetPwdForm.get('password');
  }
  get ConfirmPassword() {
    return this.resetPwdForm.get('confirmPassword');
  }

  //-------------------------------CONSTRUCTOR----------------------------------
  constructor(private router: Router, private resetService: ResetService) {
  }


  //-------------------------------RESET FUNCTION----------------------------------
  resetPwd(resetPwdForm) {
  
    this.resetService.resetPwd(resetPwdForm.value)
      .subscribe(result => {
        if (result['code'] === 200) {
          localStorage.removeItem('resetToken');
          this.PwdNotMatching = false;
          this.router.navigate(['pwdResetDone']);
        }
        else if (result['code'] === 403) {
          this.PwdNotMatching = true;
        }
        else {
        

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
