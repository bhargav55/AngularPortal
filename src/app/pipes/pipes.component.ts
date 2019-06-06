import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template:`
  

  <!-- pipe transforms the variable value only in the ciew but does not change the value in a class-->
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{name | titlecase}}</h2>
  <h2>{{name | slice :3}}</h2>
  <h2>{{name | slice :3:5}}</h2>
  <h2>{{person | json}}</h2>
  <h2>{{5.678 | number:'1.2-3'}}</h2>
  <h2>{{5.678 | number:'3.4-5'}}</h2>
  <h2>{{5.678 | number:'3.1-2'}}</h2>
  <h2> {{0.25 | currency}}</h2>
  <h2>{{0.25 |currency : 'GBP'}}</h2>
  <h2>{{0.25 |currency : 'GBP' : 'code'}}</h2>
  <h2>{{date }}</h2>
  <h2>{{date | date :'short'}}</h2>
  <h2>{{date | date :'shortDate'}}</h2>
  <h2>{{date | date :'shortTime'}}</h2>
  <h2>{{date | date :'mediumDate'}}</h2>
  <h2>{{date | date :'mediumTime'}}</h2>` ,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "hello world";

  public date = new Date();

  public person = {
    "FirstName" : "John",
    "LastName" : "Cena"
  }
  constructor() { }

  ngOnInit() {
  }

}
