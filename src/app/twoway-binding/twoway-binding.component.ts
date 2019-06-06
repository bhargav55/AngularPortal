import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  <input [(ngModel)]="username" type="text">{{username}}
  `,
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {


  public name="hello";
  public username="";
  constructor() { }

  ngOnInit() {
  }

}
