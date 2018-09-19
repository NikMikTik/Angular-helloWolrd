import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LoginService } from './../services/login.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-http-login',
  templateUrl: './http-login.component.html',
  styleUrls: ['./http-login.component.css']
})
export class HttpLoginComponent implements OnInit {
  users: any[];
  constructor(private service: LoginService) {

  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(users => this.users = users );
  }

  signIn(credentials: HTMLInputElement) {
    let userPwd = {
      email: credentials.value,
      pwd: credentials.value
    };
    this.service.signIn(userPwd)
      .subscribe(signInCheck => {
        credentials['email'] = signInCheck.email;
        credentials['pwd'] = signInCheck.pwd;
      }, (error: Response) => {
        if (error.status === 400)
        alert('Unexpected Error occured');
        
        //  this.form.setErrors(error.json())
        else {
          throw error;
        }
      });
  }


  
}
