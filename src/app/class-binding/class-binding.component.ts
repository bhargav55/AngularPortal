import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  <h2 class="text-success">hello</h2>
  <h2 [class]="successClass">hello</h2>

  <!-- class binding takes preference over normal class assignment -->
  <h2 class="text-special" [class]="successClass">hello</h2>
  <h2 [class.text-danger]="hasError">hello</h2>
  <!-- apply multiple class binding -->
  <h2 [ngClass]="messageClasses">hello</h2>
  `,
  styles: [`
  .text-success {
    color: green;
  }
  .text-danger {
    color:red;
  }
  .text-special{
    font-style:italic;
  }`]
})
export class ClassBindingComponent implements OnInit {

  public name= "hello";
  public successClass="text-success";
  public hasError=true;
  public isSpecial=true;
  public messageClasses ={
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-special" :this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
