import { Component, OnInit } from '@angular/core';
import { CollegueAuth } from '../models/CollegueAuth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  collegueAuth: CollegueAuth = new CollegueAuth("","","");

  getAuth(){

  }
  ngOnInit() {
  }

}
