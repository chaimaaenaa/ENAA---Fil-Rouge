import { Component } from '@angular/core';
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import {AboutUsComponent} from "./component/about-us/about-us.component";
import {BlogsComponent} from "./component/workout/blogs/blogs.component";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./component/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SignUpComponent,
    AboutUsComponent,
    BlogsComponent,
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
