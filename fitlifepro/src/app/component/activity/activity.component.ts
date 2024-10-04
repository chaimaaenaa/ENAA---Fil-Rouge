import { Component } from '@angular/core';
import {NzCardComponent, NzCardGridDirective} from "ng-zorro-antd/card";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NgStyle} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzFormControlComponent} from "ng-zorro-antd/form";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {SharedModule} from  '../../shared/shared.module'
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [
    SharedModule,
    NzCardGridDirective,
    NzRowDirective,
    NgStyle,
    NzColDirective,
    NzCardComponent,
    ReactiveFormsModule,
    NzFormControlComponent,
    NzInputDirective,
    NzDatePickerComponent,
    NzButtonComponent
  ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {

  gridstyle ={
    width:'1001%',
    textAlign:'center'
  };
  activityForm!: FormGroup;
  constructor(private fb:FormBuilder,
              private message:NzMessageService){}

  ngOnInit(){
    this.activityForm = this.fb.group({
      caloriesBurned:[null , [Validators.required]],
      steps:[null , [Validators.required]],
      distance:[null , [Validators.required]],
      date:[null , [Validators.required]],



    })
  }

}
