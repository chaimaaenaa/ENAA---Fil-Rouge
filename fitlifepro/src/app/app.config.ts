import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  UserOutline,
  LockOutline,
  DashboardOutline,
  FundOutline,
  SplitCellsOutline,
  ControlOutline
} from '@ant-design/icons-angular/icons';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(en);

const icons = [
  UserOutline,
  LockOutline,
  DashboardOutline,
  FundOutline,
  SplitCellsOutline,
  ControlOutline
];

@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,
    FormsModule,               // Gestion des formulaires
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,MatToolbarModule,MatButtonModule,

    SharedModule                // Module partagé pour les composants réutilisables
  ],
  providers: [
  ],
  bootstrap: []  // Composant de démarrage
})
export class AppModule { }
export const appConfig = {



  providers: [provideAnimationsAsync()]
};
