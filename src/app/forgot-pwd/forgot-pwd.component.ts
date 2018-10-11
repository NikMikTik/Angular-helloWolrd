import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { RequestMethod } from '@angular/http';
import { FormValidators } from './../common/pwd.validator';
import { ForgotPwdService } from 'src/app/services/forgot-pwd.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent {
  //-------------------------------DECLARATIONS----------------------------------
  nonExistentUser: boolean;

  //-----------------------FORM VALIDATION---------------------------------
  forgotForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required,
    Validators.email,
    FormValidators.cannotContainSpace],
      FormValidators.shouldContainAt)
  });

  //-------------------------------GETTERS----------------------------------
  get userEmail() {
    return this.forgotForm.get('userEmail');
  }


    //-------------------------------CONSTRUCTOR----------------------------------
  constructor(private router: Router, private forgotPwdService: ForgotPwdService ) {

  }

  //-------------------------------FORGOT PWD FUNCTION----------------------------------

  forgotPwd(forgotForm) {
 
    this.forgotPwdService.forgotPwd(forgotForm.value).subscribe(result => {
      if (result['code'] === 200) {
        this.nonExistentUser = false;
        this.router.navigate(['emailSent']);
      }
      else if (result['code'] === 403) {
        this.nonExistentUser = true;

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
