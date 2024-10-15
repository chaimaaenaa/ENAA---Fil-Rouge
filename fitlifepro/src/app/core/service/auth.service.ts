import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {UserDTO} from "../models/userDTO.model";
import {LoginRequestDTO} from "../models/loginRequestDTO.model";
import {LoginResponse} from "../models/loginResponse.model";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api/auth';

  constructor(private http: HttpClient) {}

  signup(userData: UserDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  login(loginUserDto: LoginRequestDTO): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginUserDto).pipe(
      tap((loginResponse: LoginResponse) => {
        if (loginResponse) {
          localStorage.setItem('token', loginResponse.token);
        } else {
          console.error('No login response received');
        }
      })
    );
  }

  decodeToken(token: string): any {
    return jwtDecode(token);
  }

  getUserRole(token: string): string | null {
    const decodedToken = this.decodeToken(token);
    return decodedToken?.role || null;
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }



}
