import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from '@angular/common';
import { UserService } from "../../service/user.service";
import { MatListModule } from "@angular/material/list";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutDashComponent {
  workoutForm!: FormGroup;
  listOfType: string[] = [
    "cardio",
    "strength",
    "Flexibility",
    "HIIT",
    "Pilates",
    "Dance",
    "Swimming",
    "Cycling",
    "Running",
    "Walking",
    "Boxing",
    "CrossFit",
    "Rowing",
    "Stretching",
    "Martial Arts",
    "Gymnastics",
    "Climbing",
    "Plyometrics"
  ];

  workouts: any;

  constructor(private fb: FormBuilder, private userService: UserService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.workoutForm = this.fb.group({
      type: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      date: [null, [Validators.required]],
      caloriesBurned: [null, [Validators.required]]
    });
    this.getWorkouts();
  }

  getWorkouts() {
    this.userService.getWorkouts().subscribe(res => {
      this.workouts = res;
    });
  }

  submitForm() {
    this.userService.postWorkout(this.workoutForm.value).subscribe(
      res => {
        this.snackBar.open("Workout posted successfully", "Close", { duration: 5000 });
        this.workoutForm.reset();
        this.getWorkouts();
      },
      error => {
        this.snackBar.open("Error while posting workout", "Close", { duration: 5000 });
      }
    );
  }
}
