import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `

  <div *ngFor= "let color of colors;index as i">
  <h2>{{i}} {{color}}</h2>
  </div>

  <div *ngFor= "let color of colors;first as f">
  <h2>{{f}} {{color}}</h2>
  </div>

  <div *ngFor= "let color of colors;last as f">
  <h2>{{f}} {{color}}</h2>
  </div>

  <div *ngFor= "let color of colors;odd as f">
  <h2>{{f}} {{color}}</h2>
  </div>

  <div *ngFor= "let color of colors;even as f">
  <h2>{{f}} {{color}}</h2>
  </div>
  `,
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {


  public colors= ["red","green","yellow"];
  constructor() { }

  ngOnInit() {
  }

}
