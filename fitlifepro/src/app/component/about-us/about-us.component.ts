import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent]
})
export class AboutUsComponent {
  constructor(private router: Router) {}

  onContact() {
    this.router.navigate(['/contact-us']);
  }
}
