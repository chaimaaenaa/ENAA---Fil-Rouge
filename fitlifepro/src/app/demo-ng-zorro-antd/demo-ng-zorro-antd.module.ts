import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importer les composants NG-ZORRO que vous souhaitez utiliser
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';  // Pour la gestion des grilles (layout)
import { NzFormModule } from 'ng-zorro-antd/form';  // Pour les formulaires

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,  // Importer les boutons
    NzIconModule,    // Importer les icônes
    NzCardModule,    // Importer les cartes
    NzGridModule,    // Pour les grilles
    NzFormModule     // Pour les formulaires
  ],
  exports: [
    NzButtonModule,
    NzIconModule,
    NzCardModule,
    NzGridModule,
    NzFormModule
  ]
})
export class DemoNgZorroAntdModule { }
