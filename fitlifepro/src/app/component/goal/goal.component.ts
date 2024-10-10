import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { DatePipe } from '@angular/common';
import {error} from "@ant-design/icons-angular";

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
  ],
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']  // عدلت `styleUrl` إلى `styleUrls`
})
export class GoalComponent {
  goalForm!: FormGroup;
  goals: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar  // هنا ضفنا `snackBar`
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
  updateStatus(id: number){
    this.userService.updateGoalStatus(id).subscribe(res=>{
      this.message.success("Goal update successfully" , {nzDuration:5000});
      this.getAllGoals();

    },error=>{
      this.message.error("Error While updating goal",{nzDuration:5000});
      }
    )

  }
}
