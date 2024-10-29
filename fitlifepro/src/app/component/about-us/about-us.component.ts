import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.css'],
  standalone: true,
    imports: [CommonModule, RouterLink, HeaderComponent]
})
export class AboutUsComponent {
}
