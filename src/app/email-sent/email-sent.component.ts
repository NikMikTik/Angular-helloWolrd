import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.css']
})
export class EmailSentComponent {
  mailCheckWarning: boolean;
  constructor() {
   }
  emailSentForm = new FormGroup({});

  emailSent() {
    
this.mailCheckWarning=true;
  }  


}
