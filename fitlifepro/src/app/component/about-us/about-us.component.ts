import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'] // Fixed 'styleUrl' to 'styleUrls'
})
export class AboutUsComponent {
  imports: [CommonModule,  ]

  // Corrected the array structure
  sections = [
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
  navItems: any;
}
