import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  postActivity(activityDto: any): Observable<any> {
    return this.http.post<any>(BASIC_URL + "api/activity", activityDto);
  }

  getActivities(): Observable<any> {
    return this.http.get<any>(BASIC_URL + "api/activities");
  }

  postWorkout(workoutDto: any): Observable<any> {
    return this.http.post<any>(BASIC_URL + "api/workout", workoutDto);
  }
  getWorkouts(): Observable<any> {
    return this.http.get<any>(BASIC_URL + "api/Workouts");
  }
  postGoal(goalDto: any): Observable<any> {
    return this.http.post<any>(BASIC_URL + "api/goal", goalDto);
  }

}
