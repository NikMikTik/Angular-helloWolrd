import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CommsService extends DataService{

  constructor(http:Http) {
    super('http://localhost:8090/campaign/createComms',http)
   }
}
