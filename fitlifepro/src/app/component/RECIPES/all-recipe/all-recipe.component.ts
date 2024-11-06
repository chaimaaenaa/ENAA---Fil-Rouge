import { Component } from '@angular/core';
import {HeaderComponent} from "../../header/header.component";
import {FooterComponent} from "../../footer/footer.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-recipe',
  standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent
    ],
  templateUrl: './all-recipe.component.html',
  styleUrl: './all-recipe.component.css'
})
export class AllRecipeComponent {
  constructor(private router: Router) {}

  onclick() {
    this.router.navigate(['/recipe-page']);
  }

}
