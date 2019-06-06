import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
  Welcome {{name}}
  <input [id]="myId" type="text" value="hello">
  <!-- interpolation works only with strings. Below input field will be disabled even if we pass boolen value-->
  <input disabled = "{{false}}" id="{{myId}}" type="text" value="hello">
  <!-- This works -->
  <input [disabled] = "isDisabled" id="{{myId}}" type="text" value="hello">
  <!-- another way of property binding -->
  <input bind-disabled = "isDisabled" id="{{myId}}" type="text" value="hello">
  `
  ,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public name= "Codeevolution";
  public myId="testId";
  public isDisabled=true;
  constructor() { }

  ngOnInit() {
  }

}
