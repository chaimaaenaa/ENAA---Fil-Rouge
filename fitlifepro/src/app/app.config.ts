import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import des icônes spécifiques depuis '@ant-design/icons-angular/icons'
import {
  UserOutline,
  LockOutline,
  DashboardOutline,
  FundOutline,
  SplitCellsOutline,
  ControlOutline
} from '@ant-design/icons-angular/icons';

// Importation des modules partagés et personnalisés si nécessaires
import { SharedModule } from './shared/shared.module';
import { DemoNgZorroAntdModule } from './demo-ng-zorro-antd/demo-ng-zorro-antd.module';
import { AppComponent } from './app.component';

// Enregistrement des données de localisation (locale en_US pour l'anglais)
registerLocaleData(en);

// Liste des icônes à utiliser dans l'application
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
    HttpClientModule,           // Gestion des requêtes HTTP
    NzButtonModule,             // Module de bouton de NG-ZORRO
    NzIconModule.forRoot(icons),// Configuration des icônes à l'échelle globale
    DemoNgZorroAntdModule,      // Module personnalisé de NG-ZORRO si nécessaire
    SharedModule                // Module partagé pour les composants réutilisables
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },  // Fournir la locale anglaise
  ],
  bootstrap: []  // Composant de démarrage
})
export class AppModule { }
export const appConfig = {

  // Zid hna configuration dyalek
};
