import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOption} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {Component} from "@angular/core";
import {UserService} from "../../../core/service/user.service";
import {MatSelect} from "@angular/material/select";


@Component({
  selector: 'app-workout',
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
    MatListModule,
    MatSelect,
    MatOption


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
