import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { MatTabsModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { GallerieComponent } from './gallerie/gallerie.component';
import { ROUTES } from './app.route';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ScoreComponent } from './score/score.component';
import { PipeScore } from './pipes/pipeScore';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    GallerieComponent,
    ScoreComponent,
    PipeScore
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTabsModule,
    NgbModule,
    MatListModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
     HttpClientModule
  ],
  exports: [
    MatTabsModule,
    NgbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
