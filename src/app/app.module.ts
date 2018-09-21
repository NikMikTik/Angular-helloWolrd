import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { ForgotPwdService } from './services/forgot-pwd.service';
import { ResetService } from './services/reset.service';

import {
  MatCheckboxModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatDatepicker,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule,
  ErrorStateMatcher
} from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';
import { HttpLoginComponent } from './http-login/http-login.component';
import { ErrorHandler } from '@angular/core';
import { AppErrorhandler } from 'src/app/common/app-error-handler';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginReactiveFormComponent,
    HttpLoginComponent,
    WelcomeComponent,
    NotFoundComponent,
    ForgotPwdComponent,
    EmailSentComponent,
    ResetPwdComponent
  ],
  imports: [
    MatCheckboxModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:HttpLoginComponent},
      {path:'login',component:HttpLoginComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'forgotPwd',component:ForgotPwdComponent},   
      {path:'emailSent',component:EmailSentComponent},   
      {path:'resetPwd',component:ResetPwdComponent},   
      {path:'**',component:NotFoundComponent}
    ]),
  ],
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule
  ],
  providers: [
    LoginService,
    ForgotPwdService,
     ResetService,
    ErrorStateMatcher,
    { provide: ErrorHandler, useClass: AppErrorhandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
