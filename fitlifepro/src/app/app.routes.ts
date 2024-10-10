import { Routes } from '@angular/router';
import {ActivityComponent} from "./component/activity/activity.component";
import {UserDashboardComponent} from "./component/dashboard/user-dashboard/user-dashboard.component";
import {WorkoutDashComponent} from "./component/workoutdash/workout.component";
import {HomeComponent} from "./component/home/home.component";
import {BlogsComponent} from "./component/workout/blogs/blogs.component";
import {Blogs1Component} from "./component/workout/blogs1/blogs1.component";
import {Blogs2Component} from "./component/workout/blogs2/blogs2.component";
import {CategoryComponent} from "./component/workout/category/category.component";
import {GiftAPlanComponent} from "./component/workout/gift-a-plan/gift-a-plan.component";
import {AllRecipeComponent} from "./component/RECIPES/all-recipe/all-recipe.component";
import {RecipePageComponent} from "./component/RECIPES/recipe-page-open/recipe-page-open.component";
import {RecipesPageComponent} from "./component/RECIPES/recipes-page/recipes-page.component";
import {AboutUsComponent} from "./component/about-us/about-us.component";
import {ContactUsComponent} from "./component/contact-us/contact-us.component";
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import {LoginComponent} from "./component/login/login.component";
import {GoalComponent} from "./component/goal/goal.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";

export const routes: Routes = [

  { path:"app-dashboard" , component:DashboardComponent},
  { path:"activity" , component:ActivityComponent},
  { path: 'dashboard', component: UserDashboardComponent },
  {path: "app-workout" , component:WorkoutDashComponent},
  {path:"home" , component:HomeComponent},
  {path:"app-blogs" , component:BlogsComponent },
  {path: "app-blogs1" , component:Blogs1Component},
  {path: "app-blogs2" , component:Blogs2Component},
  {path: "app-category" , component:CategoryComponent},
  {path: "app-gift-a-plan" , component:GiftAPlanComponent},
  {path: "app-all-recipe" , component:AllRecipeComponent},
  {path: "app-recipe-page" , component:RecipePageComponent },
  {path: "app-recipes-page" , component:RecipesPageComponent },
  {path: "app-about-us" , component:AboutUsComponent},
  {path: "app-contact-us" , component:ContactUsComponent},
  {path: "app-sign-up" , component:SignUpComponent},
  {path: "app-login" , component:LoginComponent},
  {path: "app-goal" , component:GoalComponent},






];
