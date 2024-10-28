import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
    imports: [
        RouterLink,
        HeaderComponent,
        RouterOutlet
    ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  adviceItems: any;
  features: any;
}
