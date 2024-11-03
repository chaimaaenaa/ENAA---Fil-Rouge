import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-head-dash',
  standalone: true,
    imports: [
        MatIcon,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './head-dash.component.html',
  styleUrl: './head-dash.component.css'
})
export class HeadDashComponent {
  constructor(private router: Router) {}

  onGiftPlanClick() {
    this.router.navigate(['/gift-a-plan']);
  }



}
