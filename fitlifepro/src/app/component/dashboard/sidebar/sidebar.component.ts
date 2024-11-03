import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {RouterLink, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
    imports: [
        MatIcon,
        MatListItem,
        MatNavList,
        MatSidenav,
        MatSidenavContainer,
        MatSidenavContent,
        RouterLink,
        RouterOutlet,
        HeaderComponent
    ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
