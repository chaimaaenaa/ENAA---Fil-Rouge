import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatIcon } from "@angular/material/icon";
import { MatListItem, MatNavList } from "@angular/material/list";
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'user-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    MatSidenavContent,
    MatIcon,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatIconModule
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
