import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AppError } from './../common/app-error';
import { Response } from '@angular/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url:string,private http: Http) { }

  getAll() {
    return this.http.get(this.url).map(response => response.json()).catch(this.handleError);
  }

  signIn(userPwd) {
    return this.http.post(this.url, JSON.stringify(userPwd))
    .map(response => response.json())
    .catch(this.handleError);
  }


  private handleError(error:Response){
    return Observable.throw(new AppError(error));
    
  }

}
