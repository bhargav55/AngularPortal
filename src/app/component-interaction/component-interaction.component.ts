import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-component-interaction',
  template:`
  <h2>
  welcome {{name}}
  </h2>
  <button (click)="Fire()"> Send</button>
  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {


 @Input('parentData')  public name ;
 @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  Fire()
  {
    this.childEvent.emit("from Child component");
  }

}
