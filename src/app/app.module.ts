import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginReactiveFormComponent,
    HttpLoginComponent,
    WelcomeComponent
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
      { path: 'login', component: HttpLoginComponent },
      { path: '', component: WelcomeComponent }
    ])
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
    ErrorStateMatcher,
    { provide: ErrorHandler, useClass: AppErrorhandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
