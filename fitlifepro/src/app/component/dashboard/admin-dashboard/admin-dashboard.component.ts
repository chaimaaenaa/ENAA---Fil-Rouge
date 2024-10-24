import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user.service';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})


export class AdminDashboardComponent implements OnInit {
  totalUsers: number = 0;
  totalCoaches: number = 0;

  activeSection: string ='red' ;

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.loadCounts();
  }
  setActive(section: string) {
    this.activeSection = section;
  }

  private loadCounts() {
    this.UserService.getTotalUsers().subscribe(count => this.totalUsers = count);
  }
}

