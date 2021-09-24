import { Component, OnInit } from '@angular/core';
import * as Interfaces from '../../Interfaces/Person';
import * as  Models from '../../Models/Person';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public constructor() {
    this.submitted = false;
    this.person = new Models.Person();
  }

  public submitted: boolean;
  public person: Interfaces.Person;

  public ngOnInit() { }

  public onSubmit(): void {
    this.submitted = true;

    alert(`Done!`);
  }

}
