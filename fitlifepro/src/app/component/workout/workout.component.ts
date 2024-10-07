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
    MatButtonModule
  ],
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
  gridStyle = {
    width: '100%',
    textAlign: 'center'
  };
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

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.workoutForm = this.fb.group({
      type: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      date: [null, [Validators.required]],
      caloriesBurned: [null, [Validators.required]]
    });
  }
}
