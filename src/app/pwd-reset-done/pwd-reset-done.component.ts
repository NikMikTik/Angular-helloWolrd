import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pwd-reset-done',
  templateUrl: './pwd-reset-done.component.html',
  styleUrls: ['./pwd-reset-done.component.css']
})
export class PwdResetDoneComponent implements OnInit {
  proceedToLogin: boolean;
  
  constructor() { }
  pwdResetDoneForm = new FormGroup({});

  pwdResetDone() {
this.proceedToLogin=true;
  }

  ngOnInit() {
  }

}
