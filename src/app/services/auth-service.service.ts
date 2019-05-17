import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CollegueAuth } from '../models/CollegueAuth';
import { environment } from 'src/environments/environment';

import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user = new Subject<ColleguesUtilisateur>();

  connected = false;
  urlAuth: string = environment.urlAuth;
  // urlSpring: string = environment.urlGet;
  constructor(private httpClient: HttpClient) { }

authorizationDeCollegue(collegueAuth: CollegueAuth): Observable<CollegueAuth>{
  return this.httpClient.post<CollegueAuth>(`${this.urlAuth}/auth`, collegueAuth, {withCredentials: true}) .pipe(
    tap(user => {
      // this.user.next(user);
      this.connected = true;} )
  );
}


deconnexionDeCollegue(): any{
  return this.httpClient.post(`${this.urlAuth}/logout`, null, {withCredentials: true}).pipe(
    tap(() => this.connected = false )
  );
}

isLogin(){
 return this.connected;
}
}
