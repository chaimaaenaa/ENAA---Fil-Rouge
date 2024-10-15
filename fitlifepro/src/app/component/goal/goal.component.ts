import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../core/service/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {MatList, MatListItem, MatNavList} from '@angular/material/list';
import { DatePipe } from '@angular/common';
import {error} from "@ant-design/icons-angular";
import {MatSidenav} from "@angular/material/sidenav";
import {RouterLink} from "@angular/router";



@Component({
  selector: 'app-goal',
  standalone: true,
    imports: [
        MatSnackBarModule,
        MatError,
        MatDatepicker,
        MatLabel,
        MatDatepickerToggle,
        MatDatepickerInput,
        MatFormField,
        MatCardContent,
        MatCardTitle,
        MatCard,
        MatCardHeader,
        ReactiveFormsModule,
        MatIcon,
        MatListItem,
        MatList,
        DatePipe,
        MatNavList,
        MatSidenav,
        RouterLink,
    ],
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  goalForm!: FormGroup;
  goals: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.goalForm = this.fb.group({
      description: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });

    this.getAllGoals();
  }

  submitForm() {
    this.userService.postGoal(this.goalForm.value).subscribe(
      (res) => {
        this.snackBar.open('Goal posted successfully', 'Close', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
        this.goalForm.reset();
        this.getAllGoals();
      },
      (error) => {
        this.snackBar.open('Error while posting goal', 'Close', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      }
    );
  }

  getAllGoals() {
    this.userService.getGoal().subscribe((res) => {
      this.goals = res;
      console.log(this.goals);
    });
  }
  updateStatus(id: number) {
    this.userService.updateGoalStatus(id).subscribe(
      res => {
        this.snackBar.open("Goal updated successfully", "Close", {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.getAllGoals();
      },
      error => {
        this.snackBar.open("Error while updating goal", "Close", {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    );
  }

}
