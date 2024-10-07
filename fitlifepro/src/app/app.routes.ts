import { Routes } from '@angular/router';
import {ActivityComponent} from "./component/activity/activity.component";
import {UserDashboardComponent} from "./component/dashboard/user-dashboard/user-dashboard.component";
import {WorkoutComponent} from "./component/workout/workout.component";
import {HomeComponent} from "./component/home/home.component";

export const routes: Routes = [

  { path:"activity" , component:ActivityComponent},
  { path: 'dashboard', component: UserDashboardComponent },
  {path: "workout" , component:WorkoutComponent},
  {path:"home" , component:HomeComponent}

];
