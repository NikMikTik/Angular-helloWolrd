import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormValidators } from './../common/pwd.validator';

@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.css']
})
export class LoginReactiveFormComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required,
    Validators.email,
    FormValidators.cannotContainSpace],
      FormValidators.shouldContainAt),
    pwd: new FormControl('', [Validators.required,
    Validators.minLength(3),
    FormValidators.cannotContainSpace])
  });

  get email() {
    return this.form.get('email');
  }


  get pwd() {
    return this.form.get('pwd');
  }

}
