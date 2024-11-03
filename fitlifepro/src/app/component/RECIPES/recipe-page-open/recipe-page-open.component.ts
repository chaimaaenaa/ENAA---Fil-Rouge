import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";

@Component({
  selector: 'app-recipe-page',
  templateUrl: 'recipe-page-open.component.html',
  standalone: true,
    imports: [CommonModule, FooterComponent]
})
export class RecipePageComponent {
  // Add any component logic here
}
