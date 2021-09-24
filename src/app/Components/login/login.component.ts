import { Component, OnInit } from '@angular/core';
import * as Interfaces from '../../Interfaces/Person';
import * as  Models from '../../Models/Person';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public constructor() {
    this.submitted = false;
    this.person = new Models.Person();
  }

  public submitted: boolean;
  public person: Interfaces.Person;

  public ngOnInit() {}

  public onSubmit(): void {
    this.submitted = true;

    alert(`Done!`);
  }


}
