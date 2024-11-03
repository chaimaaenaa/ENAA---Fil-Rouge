import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';
import {LoginRequestDTO} from "../../core/models/loginRequestDTO.model";
import {LoginResponse} from "../../core/models/loginResponse.model";
import {Role} from "../../core/enums/role.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', [Validators.required]],
      password: ['', [Validators.required]],
      keepMeSignedIn: [false]
    });
  }

  login() {
    if (!this.loginForm.valid) {
      console.error('Form is not valid.');
      return;
    }

    const formValues = this.loginForm.value;
    const loginUser: LoginRequestDTO = {
      usernameOrEmail: formValues.usernameOrEmail,
      password: formValues.password
    };

    this.authService.login(loginUser).subscribe({
      next: (response : LoginResponse) => this.handleLoginSuccess(response),
      error: (err) => this.handleLoginError(err),
      complete: () => console.log('Login process complete.')
    });
  }

  private handleLoginSuccess(response: LoginResponse) {
    console.log('Login successful:', response);

    const token = response?.token;
    if (!token) {
      console.error('No token found in the response.');
      return;
    }

    console.log('Token expires in:', response.expiresIn);

    try {
      const role: string | null = this.authService.getUserRole(token);

      if (role) {
        this.redirectUserByRole(role);
      } else {
        console.error('No role found in the token.');
      }
    } catch (error) {
      console.error('Token decoding failed:', error);
    }
  }



  private handleLoginError(error: any) {
    console.error('Login failed:', error);
  }

  private redirectUserByRole(role: string | null) {
    switch (role) {
      case Role.ADMIN.toString():
        this.router.navigate(['/home']);
        break;
      case Role.ATHLETE.toString():
        this.router.navigate(['/dashboard']);
        break;
      default:
        console.error('Unknown role:', role);
        break;
    }
  }


}
