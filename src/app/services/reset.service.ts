import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ResetService extends DataService{
  constructor(http: Http) {
    super('http://localhost:8090/campaign/resetPwd',http)
  }

}
