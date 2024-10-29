import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.css'],
  standalone: true,
    imports: [CommonModule, RouterLink, HeaderComponent]  // Correct way to include imports in a standalone component
})
export class AboutUsComponent {
  navItems = [


    { label: 'Recipes', isActive: false },
    { label: 'Gift A Plan', isActive: false }
  ];

  teamMembers = [
    {
      name: 'Name here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam, tortor sollicitudin egestas convallis. Lorem ipsum dolor sit amet'
    },
    {
      name: 'Name here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam, tortor sollicitudin egestas convallis. Lorem ipsum dolor sit amet'
    },
    {
      name: 'Name here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam, tortor sollicitudin egestas convallis. Lorem ipsum dolor sit amet'
    },
    {
      name: 'Name here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam, tortor sollicitudin egestas convallis. Lorem ipsum dolor sit amet'
    }
  ];
}
