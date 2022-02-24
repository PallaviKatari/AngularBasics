import { Component, OnInit } from '@angular/core';
declare function demofunction():any;
declare function  signupBtn():any;
declare function  loginBtn():any;
declare function  signupLink():any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
   demofunction();
   signupBtn();
   loginBtn();
   signupLink();
  

  }

}
