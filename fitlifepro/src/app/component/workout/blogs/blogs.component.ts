import { Component } from '@angular/core';
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-blogs',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

}
