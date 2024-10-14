import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {CommonModule} from "@angular/common";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserOutline, LockOutline, DashboardOutline, FundOutline, SplitCellsOutline, ControlOutline } from '@ant-design/icons-angular/icons';
import {IconDefinition} from "@ant-design/icons-angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const icons: IconDefinition[] = [
  UserOutline,
  LockOutline,
  DashboardOutline,
  FundOutline,
  SplitCellsOutline,
  ControlOutline
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
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
