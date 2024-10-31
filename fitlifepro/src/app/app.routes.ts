import { Routes} from '@angular/router';

import {BlogsComponent} from "./component/workout/blogs/blogs.component";
import {CategoryComponent} from "./component/workout/category/category.component";
import {GiftAPlanComponent} from "./component/workout/gift-a-plan/gift-a-plan.component";
import {AllRecipeComponent} from "./component/RECIPES/all-recipe/all-recipe.component";
import {AboutUsComponent} from "./component/about-us/about-us.component";
import {ContactUsComponent} from "./component/contact-us/contact-us.component";
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import {LoginComponent} from "./component/login/login.component";
import {LandingPageComponent} from "./component/landing-page/landing-page.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {OverViewComponent} from "./component/dashboard/over-view/over-view.component";
import {WorkoutDashComponent} from "./component/dashboard/workoutdash/workout.component";
import {ActivityComponent} from "./component/dashboard/activity/activity.component";
import {GoalComponent} from "./component/dashboard/goal/goal.component";

export const routes: Routes = [

  {path: 'home' , component:LandingPageComponent},

  { path: 'all-recipe' , component:AllRecipeComponent},
  { path: 'blogs' , component:BlogsComponent },
  { path: 'about-us' , component:AboutUsComponent},
  { path: 'gift-a-plan' , component:GiftAPlanComponent},
  { path: 'contact-us' , component:ContactUsComponent},
  { path: 'sign-up' , component:SignUpComponent},
  { path: 'login' , component:LoginComponent},
  { path: 'category' , component:CategoryComponent},

  { path: 'dashboard',
    component: DashboardComponent ,
    children:[
      { path: '', redirectTo: 'workout', pathMatch: 'full' },
      { path: 'over-view', component: OverViewComponent },
      { path: 'workout', component: WorkoutDashComponent },
      { path: 'activity', component: ActivityComponent },
      { path: 'goal', component: GoalComponent },
    ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },

  // { path:"recipe-page" , component:RecipePageComponent},
  // { path:"recipes-page" , component:RecipesPageComponent},
  //
  // {path: "blogs1" , component:Blogs1Component},
  // {path: "blogs2" , component:Blogs2Component},
  //
  //
  //
  //
  //
  // {path: "rec" , component:RecComponent},
  //


  // { path: '**', redirectTo: 'home', pathMatch: 'full' },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },









];


