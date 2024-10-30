import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import {UserService} from "../../../core/service/user.service";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule
  ]
})
export class ActivityComponent implements OnInit {
  activityForm!: FormGroup;
  activities: any[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.activityForm = this.fb.group({
      caloriesBurned: ['', Validators.required],
      distance: ['', Validators.required],
      steps: ['', Validators.required],
      date: ['', Validators.required]
    });
    this.getAllActivities();
  }

  submitForm() {
    if (this.activityForm.valid) {
      console.log(this.activityForm.value); // Confirm values
      this.userService.postActivity(this.activityForm.value).subscribe(
        (res: any) => {
          this.snackBar.open("Activity posted successfully", "Close", {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.activityForm.reset();
          this.getAllActivities();
        },
        (error: any) => {
          this.snackBar.open("Error while posting Activity", "Close", {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
        }
      );
    }
  }

  getAllActivities() {
    this.userService.getActivities().subscribe(res => {
      this.activities = res;
    });
  }
}
