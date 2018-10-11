import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AppError } from './../common/app-error';
import { Response } from '@angular/http';
import { throwError, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { DashboardElement } from './../dashboard-element';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: Http) { }
  headers = new Headers();
  currentCmpCard: boolean;
  getAll() {
    return this.http.get(this.url).map(response => response.json()).catch(this.handleError);
  }
  

  initialisedResetHeader(auth: boolean) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    auth ? headers.append('Authorization', `${localStorage.getItem('resetToken')}`) : null;
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  initialisedHeader(auth: boolean) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    auth ? headers.append('Authorization', `${localStorage.getItem('token')}`) : null;
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  signIn(credentials) {

    return this.http.post(this.url, JSON.stringify(credentials), this.initialisedResetHeader(false))
      .map(response => {
        let result = response.json();
        return result;
      })
      .catch(this.handleError)
      ;
  }

  getAllCampaign(): Observable<DashboardElement[]> {
    return this.http.get(this.url,this.initialisedHeader(true)).map(response => response.json()).catch(this.handleError);
  }

  createCampaign(createCampaignForm) {
    return this.http.post(this.url, JSON.stringify(createCampaignForm), this.initialisedHeader(true)).map(response => {
      let result = response.json();
      return result;
    }).catch(this.handleError);
  }

  forgotPwd(userEmail) {
    return this.http.post(this.url, JSON.stringify(userEmail), this.initialisedResetHeader(false))
      .map(response => {
        let result = response.json();
        return result;
      }).catch(this.handleError);

  }


  resetPwd(resetPwdForm) {
    return this.http.post(this.url, JSON.stringify(resetPwdForm), this.initialisedResetHeader(true))
      .map(response => {
        let result = response.json();
        return result;
      }).catch(this.handleError);
  }

  getResetPwd(resetToken) {
    return this.http.get(this.url + '/' + resetToken)
      .map(response => {
        let result = response.json();
        return result;
      }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(new AppError(error));

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    return this.http.delete(this.url, this.initialisedHeader(true)).map(response => {
      let result = response.json();
      return result;
    }).catch(this.handleError);

  }



  public getToken(): string {
    return localStorage.getItem('resetToken');
  }

  // setUserEmail(userEmail){
  // this.currentUserEmail=of(userEmail);
  // }


  // getUserByEmail(){
  //   return this.http.get(this.url).map(response => response.json()).catch(this.handleError);
  // }


  // getUserEmail(){
  //   return this.currentUserEmail;
  // }

  // hasCampaign(){
  //   if(localStorage.getItem('campaignName')!=null)
  //   return true;
  //   return false;
  // }


  isLoggedIn() {
    // let jwtHelper =new JwtHelper();

    // let token=localStorage.getItem('token');
    // if(!token)
    // {return false;}
    // let expirationDate=jwtHelper.getTokenExpirationDate(token);
    // let isExpired=jwtHelper.isTokenExpired(token);

    // console.log(isExpired);
    // console.log('kfre');
    console.log(tokenNotExpired());
    return tokenNotExpired();
  }


  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token)
      return null;
    console.log(new JwtHelper().decodeToken(token))
    return new JwtHelper().decodeToken(token);
  }







}
