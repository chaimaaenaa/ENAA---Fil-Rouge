import { Component } from '@angular/core';
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-all-recipe',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './all-recipe.component.html',
  styleUrl: './all-recipe.component.css'
})
export class AllRecipeComponent {

}
