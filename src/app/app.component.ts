import { Component } from '@angular/core';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Top-Collegue';
  constructor(private service: AuthService) {

  }

deconnexion() {
this.service.deconnexionDeCollegue().subscribe(col => {}, err => {});
}
}
