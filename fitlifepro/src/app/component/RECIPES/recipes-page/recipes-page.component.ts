import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes-page',
  standalone: true,
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'] 
})
export class RecipesPageComponent {
  recipes = [
    {
      title: "Name of the recipe will be here Name of the recipe will be here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "24 January 2022",
      author: "Name here"
    },
    {
      title: "Another recipe title here",
      description: "This is a description of another recipe. It contains details about the recipe ingredients and preparation steps...",
      date: "15 February 2022",
      author: "Another Name"
    }
  ];
}
