import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AppError } from './../common/app-error';
import { Response } from '@angular/http';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: Http) { }
  headers = new Headers();
  getAll() {
    return this.http.get(this.url).map(response => response.json()).catch(this.handleError);
  }

  signIn(credentials) {
    console.log(credentials);
    return this.http.post(this.url, JSON.stringify(credentials), options)
      .map(response => {
        let result = response.json();
        return result;
      })
      .catch(this.handleError);
  }

  forgotPwd(userEmail) {
    console.log(userEmail);
    return this.http.post(this.url, JSON.stringify(userEmail), options)
      .map(response => {
        let result = response.json();
        return result;
      }).catch(this.handleError);

  }


  resetPwd(resetPwdForm){
    console.log(resetPwdForm);
    return this.http.get(this.url)
      .map(response => {
        let result = response.json();
        return result;
      }).catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(new AppError(error));

  }

  isLoggedIn() {
    return false;
  }






}
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });