import { Component, OnInit } from '@angular/core';
import { LogManagerService } from 'src/app/services/log-manager.service';

@Component({
  selector: 'app-display-logs',
  templateUrl: './display-logs.component.html',
  styleUrls: ['./display-logs.component.css']
})
export class DisplayLogsComponent implements OnInit {

  constructor(public logManagerService : LogManagerService) { }

  ngOnInit(): void {
  }


  public clearErrorLogs() : void {
    this.logManagerService.clearErrorLogs();
  }
}
