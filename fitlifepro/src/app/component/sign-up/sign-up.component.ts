import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import {UserDTO} from "../../core/models/userDTO.model";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf]
})
export class SignUpComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  phoneNumber = '';
  sendNotifications = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  signup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const userData: UserDTO = {
      username: this.username,
      email: this.email,
      phoneNumber: this.phoneNumber,
      password: this.password,
    };

    this.authService.signup(userData).subscribe({
      next: () => {
        console.log('Signed up successfully');
        this.router.navigate(['/login'])
      },
      error: (err) => {
        console.error('Signup failed', err);
        this.errorMessage = 'Signup failed. Please try again.';
      },
    });
  }

}
