import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true
})
export class SignUpComponent {
  username = '';
  password = '';
  email = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    const userData = {
      username: this.username,
      password: this.password,
      email: this.email,
    };
    this.authService.signup(userData).subscribe({
      next: () => {
        console.log('Signed up successfully');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Signup failed', err);
        this.errorMessage = 'Signup failed. Please try again.';
      },
    });
  }
}
