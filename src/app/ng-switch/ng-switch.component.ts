import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
  <div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">You picked red color</div>
  <div *ngSwitchCase="'orange'"> You picked orange color </div>
  <div *ngSwitchCase="'green'"> You picked green color</div>
  <div *ngSwitchDefault> Pick again</div>
  </div>
  `,
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  public color="yellow";
  constructor() { }

  ngOnInit() {
  }

}
