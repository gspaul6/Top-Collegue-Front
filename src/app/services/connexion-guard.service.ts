import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService} from './auth-service.service';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConnexionGuardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private router: Router, private service: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree {
      // retourne `true` si l'utilisateur est connecté ou redirige vers la page de /login

      if (this.service.isLogin()) {
      return this.service.isLogin();
      } else {
      this.router.parseUrl('/login');
      }
  }

}


