import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import {LoginComponent} from "./component/login/login.component";
import {SharedModule} from "./shared/shared.module";
import {rename} from "node:fs";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,
    MatListModule,
    MatIconModule, MatButtonModule ,MatToolbarModule,SignUpComponent, LoginComponent, SharedModule, ],
  templateUrl: './component/dashboard/user-dashboard/user-dashboard.component.html',
  styleUrl: './component/dashboard/user-dashboard/user-dashboard.component.css'
})
export class AppComponent {
  title = 'fitlifepro';
}



