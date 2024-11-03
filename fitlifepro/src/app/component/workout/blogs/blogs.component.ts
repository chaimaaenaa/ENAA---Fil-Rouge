import { Component } from '@angular/core';
import {HeaderComponent} from "../../header/header.component";
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../../footer/footer.component";

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    FooterComponent
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

}
