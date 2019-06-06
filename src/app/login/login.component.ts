import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `<h2>
                 Welcome {{title}}
                  </h2>
                  
                  <h2>
                  {{"Welcome " + title}}
                  </h2>
                  <h2>
                  {{title.toUpperCase()}}
                  </h2>
                  <h2>
                  {{greetUser()}}
                  </h2>
                  <h2>
                  {{siteUrl}}
                  </h2>
                  `
                  ,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title="hello";
  public siteUrl= window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
   return "returned value";
  }

}
