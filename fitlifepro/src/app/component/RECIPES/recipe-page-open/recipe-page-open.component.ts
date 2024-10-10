import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page-open.component.html',
  standalone: true,
  styleUrls: ['./recipe-page-open.component.css']
})
export class RecipePageComponent {

  imports: [CommonModule,  ]
}
