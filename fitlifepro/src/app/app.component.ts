import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import {LoginComponent} from "./component/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignUpComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitlifepro';
}
