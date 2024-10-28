import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  onGiftPlanClick() {
    this.router.navigate(['/gift-a-plan']);
  }

  onLoginClick() {
    this.router.navigate(['/login']);
  }

  onSignUpClick() {
    this.router.navigate(['/sign-up']);
  }
}
