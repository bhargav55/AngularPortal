import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  
  <button (click)="onClick($event)">Greet</button>
  {{greeting}}

  <button (click)="greeting='Welcome'">greet</button>


  <!-- reference variables -->
  <input #myInput type="text">
  <button (click)="LogMessage(myInput)">Log</button>
  `,
  styles: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public name="hello";
  // public greeting="";

  public LogMessage(value)
  {
    console.log(value);
  }
  public onClick(event)
  {
    console.log(event);
    // this.greeting=event.type;
  }
  constructor() { }

  ngOnInit() {
  }

}
