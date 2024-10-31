import {Component, ElementRef, ViewChild} from '@angular/core';
import {DatePipe, DecimalPipe} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from "@angular/material/card";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {UserService} from "../../../core/service/user.service";
import {Chart} from "chart.js/auto";
import {MatRadioButton} from "@angular/material/radio";
import {MatButton} from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-over-view',
  standalone: true,
  imports: [
    DecimalPipe,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatGridList,
    MatGridTile,
    MatRadioButton,
    MatCardHeader,
    MatCardImage,
    MatCardActions,
    MatButton
  ],
  templateUrl: './over-view.component.html',
  styleUrl: './over-view.component.css',
  providers:[DatePipe,MatGridListModule]
})
export class OverViewComponent {


  statsData: any = {};
  workouts:any ;
  activities:any;
  errorMessage: string | null = null;

  @ViewChild('workoutLineChart') private workoutLineChartRef:ElementRef;
  @ViewChild('activityLineChart') private activityLineChartRef:ElementRef;


  constructor(private userService: UserService,
              private datePipe: DatePipe){}

  ngOnInit(){
    this.getStats();
    this.getGraphStats();
  }
  // getGraphStats(){
  //   this.userService.getGraphStats().subscribe(res =>{
  //     this.workouts = res.workouts;
  //     this.activities = res.activities;
  //     console.log(this.workouts, this.activities);
  //     if (this.workoutLineChartRef || this.workoutLineChartRef){
  //       this.createLineChart();
  //     }
  //
  //   } )
  // }

  getGraphStats() {
    this.userService.getGraphStats().subscribe(res => {
      this.workouts = res.workouts;
      this.activities = res.activities;
      console.log(this.workouts, this.activities);
      if (this.workouts && this.activities) {
        this.createLineChart();
      }
    }, error => {
      console.error('Error fetching graph stats:', error);
    });
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



  // getStats(){
  //   this.userService.getStats().subscribe(res=>{
  //     console.log(res);
  //     this.statsData=res;
  //   })
  // }
  getStats(){
    this.userService.getStats().subscribe(res => {
      console.log(res);
      this.statsData = res;
    }, error => {
      console.error('Error fetching stats:', error);
    });
  }



}
