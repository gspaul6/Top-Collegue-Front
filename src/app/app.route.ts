import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import {ConnexionGuardService} from './services/connexion-guard.service'

export const ROUTES: Routes = [
  {
      path: 'accueil', canActivate: [ConnexionGuardService],
      component: MenuComponent
  },
  {
      path: 'gallerie', canActivate: [ConnexionGuardService],
      component:  GallerieComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: '', canActivate: [ConnexionGuardService],
      redirectTo: '/login',
      pathMatch: 'full'
  },
  // {
  //     path: 'gallerie/:matricule', canActivate: [ConnexionGuardService],
  //     component: CourantCollegueComponent
  // }

];
