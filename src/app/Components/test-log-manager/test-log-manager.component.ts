import { Component, OnInit } from '@angular/core';
import { LogManagerService } from 'src/app/services/log-manager.service';

@Component({
  selector: 'app-test-log-manager',
  templateUrl: './test-log-manager.component.html',
  styleUrls: ['./test-log-manager.component.css']
})
export class TestLogManagerComponent implements OnInit {

  constructor(private logManagerService : LogManagerService) { }

  public debugMessage : string;
  public informationMessage : string;
  public warningMessage : string;
  public errorMessage : string;
  
  ngOnInit(): void {
  }

  public logDebug() : void {
    this.logManagerService.logDebug(this.debugMessage);
  }

  
  public logInformation() : void {
    this.logManagerService.logInformation(this.informationMessage);
  }

  
  public logWarning() : void {
    this.logManagerService.logWarning(this.warningMessage);
  }

  
  public logError() : void {
    this.logManagerService.logError(this.errorMessage);
  }
}
