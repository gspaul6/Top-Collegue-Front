import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { ConnexionGuardService } from './services/connexion-guard.service';
import { ScoreComponent } from './score/score.component';

export const ROUTES: Routes = [
  {
    path: 'gallerie', canActivate: [ConnexionGuardService],
    component: GallerieComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'score',
    component: ScoreComponent
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
