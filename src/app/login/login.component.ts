import { Input, Component, OnInit } from '@angular/core';
import { CollegueAuth } from '../models/CollegueAuth';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  collegueAuth: CollegueAuth = new CollegueAuth('','', "");
  messageOk: string;
  messageKo: string;
   constructor(private service: AuthService) { }

  getAuth() {


   this.service.authorizationDeCollegue(this.collegueAuth).subscribe(ok => {
     this.messageKo = undefined;
     this.messageOk = 'Login successfull';
     setTimeout(() => this.messageOk = undefined, 3000);
   }, err => {
     this.messageOk = undefined;
     this.messageKo = `${err.error}`;
     setTimeout(() => this.messageKo = undefined, 3000);
   });
 }
  ngOnInit() {
  }

}
