import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {CommonModule} from "@angular/common";
import { MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSnackBarModule,
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    CommonModule
  ],
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav>
        <!-- Sidebar content -->
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar>
          <!-- Toolbar content -->
        </mat-toolbar>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fitlifepro';
}
