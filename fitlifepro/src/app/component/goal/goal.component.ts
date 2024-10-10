import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-goal' +
    '',
  standalone: true,
  imports: [
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
    ReactiveFormsModule
  ],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent {
  goalForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.goalForm = this.fb.group({
      description: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });
  }
  submitForm(){
    this.userService.postGoal(this.goalForm.value).subscribe((res=>{
        this.message.error(" Goal posting successfully",{nzDuration:5000});
        this.goalForm.reset();

    },error=>{
      this.message.error("Error while posting goal",{nzDuration:5000});
      }
    ))
  }

}
