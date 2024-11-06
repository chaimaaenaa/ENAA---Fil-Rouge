import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {HeaderComponent} from "../../header/header.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-page',
  templateUrl: 'recipe-page-open.component.html',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent]
})
export class RecipePageComponent {
  constructor(private router: Router) {}

  onRecip() {
    this.router.navigate(['/recipes-page']);
  }
}
