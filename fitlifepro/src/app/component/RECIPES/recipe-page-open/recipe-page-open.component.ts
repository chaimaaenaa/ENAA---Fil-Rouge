import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page-open.component.html',
  styleUrls: ['./recipe-page-open.component.css'],
  standalone: true,
  imports: [CommonModule]  // Correct way to include imports in a standalone component
})
export class RecipePageComponent {
  recipes: any[] = [];}
