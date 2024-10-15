import {Component, ElementRef, ViewChild} from '@angular/core';
import {UserService} from "../../core/service/user.service";
import {DatePipe, DecimalPipe} from "@angular/common";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {CategoryScale} from "chart.js"

import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav} from "@angular/material/sidenav";
import { Chart ,} from 'chart.js/auto';
import {RouterLink} from "@angular/router";
Chart.register(CategoryScale);



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    DecimalPipe,
    MatGridTile,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatGridList,
    MatIcon,
    MatNavList,
    MatSidenav,
    RouterLink,
    MatListItem
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers:[DatePipe]
})
export class DashboardComponent {


  statsData:any;
  workouts:any;
  activities:any;

  @ViewChild('workoutLineChart') private workoutLineChartRef:ElementRef;
  @ViewChild('activityLineChart') private activityLineChartRef:ElementRef;


  constructor(private userService: UserService,
              private datePipe: DatePipe){}

  ngOnInit(){
    this.getStats();
    this.getGraphStats();
  }
  getGraphStats(){
    this.userService.getGraphStats().subscribe(res =>{
      this.workouts = res.workouts;
      this.activities = res.activities;
      console.log(this.workouts, this.activities);
      if (this.workoutLineChartRef || this.workoutLineChartRef){
        this.createLineChart();
      }
    } )
  }
  ngAfterViewInit(){
    if (this.workouts && this.activities){
      this.createLineChart();
    }
  }
  private createLineChart() {
    const workoutCtx = this.workoutLineChartRef.nativeElement.getContext('2d');
    const activityCtx = this.activityLineChartRef.nativeElement.getContext('2d');


    new Chart(workoutCtx, {
      type: 'line',
      data: {
        labels:this.workouts.map((data:{date:any;})=> this.datePipe.transform(data.date, 'MM/dd')),
        datasets: [
          {
          label: 'Calories Burned',
          data: this.workouts.map((data: { caloriesBurned:any;})=> data.caloriesBurned),
          fill:false,
            borderWidth: 2,
            backgroundColor:'rgba(80, 200, 120, 0.6)',
            borderColor:'rgba(0, 100, 0, 1',
        },
          {
            label: 'Duration',
            data: this.workouts.map((data: { duration:any;})=> data.duration),
            fill:false,
            borderWidth: 2,
            backgroundColor:'rgba(80, 200, 120, 0.6)',
            borderColor:'rgba(0, 100, 0, 1',
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


    new Chart(activityCtx, {
      type: 'line',
      data: {
        labels:this.activities.map((data:{date:any;})=> this.datePipe.transform(data.date, 'MM/dd')),
        datasets: [
          {
            label: 'Calories Burned',
            data: this.activities.map((data: { caloriesBurned:any;})=> data.caloriesBurned),
            fill:false,
            borderWidth: 2,
            backgroundColor:'rgba(255, 100, 100, 0.6)',
            borderColor:'rgba(255, 0, 0, 1',
          },
          {
            label: 'Steps',
            data: this.activities.map((data: { steps:any;})=> data.steps),
            fill:false,
            borderWidth: 2,
            backgroundColor:'rgba(255, 180, 120, 0.6)',
            borderColor:'rgba(255, 100, 0, 1',
          },{
          label: 'Distance',
            data: this.activities.map((data: { distance:any;})=> data.distance),
            fill:false,
            borderWidth: 2,
            backgroundColor:'rgba(255, 200, 200, 0.6)',
            borderColor:'rgba(255, 0, 100, 1',

          },
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }





  getStats(){
    this.userService.getStats().subscribe(res=>{
      console.log(res);
      this.statsData=res;
    })
  }



}



