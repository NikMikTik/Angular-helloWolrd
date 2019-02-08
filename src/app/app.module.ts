import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { ForgotPwdService } from './services/forgot-pwd.service';
import { ResetService } from './services/reset.service';
import { AuthGuard } from './guard/authGuard';
import { LoginAuthGuard } from './guard/loginAuthGuard';
import { LogoutService } from './services/logout.service';
import { GetAllCampaignService } from './services/get-all-campaign.service';
import { CommsService } from './services/comms.service';
import {
  MatProgressSpinnerModule,
  MatTabsModule,
  MatSortModule,
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
  ErrorStateMatcher,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  DateAdapter,
  MatTableModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';
import { HttpLoginComponent } from './http-login/http-login.component';
import { ErrorHandler } from '@angular/core';
import { AppErrorhandler } from 'src/app/common/app-error-handler';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { ResetAuthComponent } from './reset-auth/reset-auth.component';
import { PwdResetDoneComponent } from './pwd-reset-done/pwd-reset-done.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { CampaignService } from 'src/app/services/campaign.service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';


export const MY_FORMATS = {
  parse: {
    dateInput: 'Do MMM YY',
  },
  display: {
    dateInput: 'Do MMM YY',
    monthYearLabel: 'MMM YY',
    dateA11yLabel: 'Do',
    monthYearA11yLabel: 'MMMM YY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginReactiveFormComponent,
    HttpLoginComponent,
    DashboardComponent,
    NotFoundComponent,
    ForgotPwdComponent,
    EmailSentComponent,
    ResetPwdComponent,
    ResetAuthComponent,
    PwdResetDoneComponent,
    DashboardComponent,
    CreateCampaignComponent,


  ],
  imports: [MatProgressSpinnerModule,
  
  MatCheckboxModule,
    BrowserModule,
    MatTabsModule,
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
    MatSortModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatOptionModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HttpLoginComponent },
      { path: 'login', component: HttpLoginComponent },
      // {
      //   path: '',
      //   redirectTo: '/dashboard',
      //   pathMatch: 'full',
      //   canActivate: [LoginAuthGuard]
      // },
      { path: 'dashboard', component: DashboardComponent,canActivate:[LoginAuthGuard] },
      { path: 'forgotPwd', component: ForgotPwdComponent },
      { path: 'emailSent', component: EmailSentComponent },
      { path: 'resetPwd/:resetToken', component: ResetAuthComponent },
      {
        path: '',
        redirectTo: '/resetPwd',
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      { path: 'resetPwd', component: ResetPwdComponent },
      { path: 'pwdResetDone', component: PwdResetDoneComponent },
      { path: 'createCampaign', component: CreateCampaignComponent ,canActivate:[LoginAuthGuard]},
      { path: '**', component: NotFoundComponent }
    ]),
  ],
  exports: [MatProgressSpinnerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSortModule,
    MatOptionModule,
    MatTableModule,
    MatSlideToggleModule
  ],
  providers: [
    LoginAuthGuard,
    LoginService,
    // CampaignAuthGuard,
    ForgotPwdService,
    GetAllCampaignService,
    ResetService,
    LogoutService,
    CampaignService,
    CommsService,
    ErrorStateMatcher,
    { provide: ErrorHandler, useClass: AppErrorhandler },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule { }
