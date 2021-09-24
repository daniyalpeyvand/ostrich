import { HttpClient , HttpHeaders } from '@angular/common/http';
import {catchError , map , tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, observable , of } from 'rxjs';
import { Person } from '../Models/Person';
import { HttpRequestResult } from '../Models/http-request-result';
import { SettingService } from './setting.service';
import { LogManagerService } from './log-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(

    private http : HttpClient,
    private settingService : SettingService,
    private logManagerService : LogManagerService,
  ) {

    this.currentUser = null;

   }

  public currentUser : Person;

  public login (userName : string , password : string) : Observable <HttpRequestResult<Person>> {

    let requestUrl : string = 
    this.settingService.url + 'Account/Login';

    let requestData : string = 
    '{"userName" :"' + userName +'" , "password":"' + password + '"}';

    return this.http.post<HttpRequestResult<Person>>(
      requestUrl , requestData , this.settingService.httpOptions
    ).pipe(map(result => {
      for (let index : number = 0; index < result.errorMessages.length; index++) {
        this.logManagerService.logError(result.errorMessages[index])
        
      }

      this.currentUser = result.data;
      return result;
    }));
    
  }

  public logout(){

    this.currentUser = null;

  }
}
