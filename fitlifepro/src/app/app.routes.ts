import { Routes } from '@angular/router';
import {ActivityComponent} from "./component/activity/activity.component";
import {UserDashboardComponent} from "./component/dashboard/user-dashboard/user-dashboard.component";

export const routes: Routes = [

  { path:"activity" , component:ActivityComponent},
  { path: 'dashboard', component: UserDashboardComponent },

];
