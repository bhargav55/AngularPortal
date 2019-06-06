import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  <h2 [style.color]="hasError ? 'red':'green'"> Style binding
  </h2>
  <h2 [style.color]="highlight">Style binding 2</h2>


  <!-- for multiple style binding -->
  <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  `,
  styles: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  public name="hello";
  public hasError=false;
  public highlight = "orange";
  public titleStyles ={
    color:"blue",
    fontStyle : "italic"
  }
  constructor() { }

  ngOnInit() {
  }

}
