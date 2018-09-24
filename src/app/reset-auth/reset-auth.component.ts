import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { ResetService } from 'src/app/services/reset.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset-auth',
  templateUrl: './reset-auth.component.html',
  styleUrls: ['./reset-auth.component.css']
})
export class ResetAuthComponent {
  resetPwdAccessDenied: boolean;
  proceedToLogin: boolean;

  resetAuthForm = new FormGroup({});

  constructor(private router: Router, private resetService: ResetService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      if (params['resetToken']) {
        console.log(params['resetToken']);
        this.resetService.getResetPwd(params['resetToken'])
          .subscribe(result => {
            if (result['code'] === 200) {
              console.log(result['token']);
              localStorage.setItem('resetToken', result['token']);
              this.router.navigate(['resetPwd']);
            }
            else if (result['code'] === 403) {
              this.resetPwdAccessDenied = true;



            }
            else {
              this.resetPwdAccessDenied = true;
            }
          }, (error: Response) => {
            if (error)
              alert('An Unexpected Error has Occured... ' + error);
            else {
              throw error;
            }
          });
      }


    });





  }

  resetAuth() {
  this.proceedToLogin = true;
  }


}
