import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
  
  <!-- element will bew removed form DOM -->
  <h2 *ngIf="false">
  Welcome
  </h2>
  
  <h2 *ngIf="displayName; else elseBlock">
  Welcome
  </h2>
  

  <div *ngIf="displayName; then thenBlock  ; else elseBlock "></div>
  <ng-template #elseBlock>
  <h2>Name is hidden</h2>
  </ng-template>
  
  
  <ng-template #thenBlock>
  <h2> Displayed</h2>
  </ng-template>
  `,
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  public displayName= false;
  constructor() { }

  ngOnInit() {
  }

}
