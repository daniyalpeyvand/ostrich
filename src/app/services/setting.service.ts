import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SettingService {

 public constructor() {

  this.url = 'http://localhost:52208/';

  }

 public url : string;

 public httpOptions = {
   headers : new HttpHeaders({

    'Content-Type' : 'application/json'
   })
 };
}
