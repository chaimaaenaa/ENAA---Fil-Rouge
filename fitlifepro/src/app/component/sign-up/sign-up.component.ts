import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf]
})
export class SignUpComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  phoneNumber = '';
  sendNotifications = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
      sendNotifications: this.sendNotifications
    };

    this.authService.signup(userData).subscribe({
      next: () => {
        console.log('Signed up successfully');
        // Automatically log in the user after successful signup
        this.login(this.email, this.password);
      },
      error: (err) => {
        console.error('Signup failed', err);
        this.errorMessage = 'Signup failed. Please try again.';
      },
    });
  }

  private login(email: string, password: string) {
    this.authService.login(email, password).subscribe({
      next: () => {
        console.log('Logged in successfully');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Login failed', err);
        this.errorMessage = 'Login failed after signup. Please try logging in manually.';
      },
    });
  }
}
