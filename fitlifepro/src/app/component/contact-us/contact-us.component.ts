import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
    imports: [FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'] // Fixed 'styleUrl' to 'styleUrls'
})
export class ContactUsComponent {
  // Method to handle form submission
  submitForm() {
    console.log('Form submitted!');
    // Add form handling logic here, e.g., send form data to a backend API
  }
}
