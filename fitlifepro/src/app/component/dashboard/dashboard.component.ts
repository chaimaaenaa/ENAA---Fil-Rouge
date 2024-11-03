import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {HeaderComponent} from "../header/header.component";
import {HeadDashComponent} from "../head-dash/head-dash.component";

@Component({
  selector: 'dashboards',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    HeadDashComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {}



