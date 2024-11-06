import { Component } from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {Router} from "@angular/router";
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-blogs1',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './blogs1.component.html',
  styleUrl: './blogs1.component.css'
})
export class Blogs1Component {
  constructor(private router: Router) {}

  onblogs1() {
    this.router.navigate(['/blogs2']);
  }
}
