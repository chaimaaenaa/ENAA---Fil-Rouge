import { Routes } from '@angular/router';
import {ActivityComponent} from "./component/activity/activity.component";
import {UserDashboardComponent} from "./component/dashboard/user-dashboard/user-dashboard.component";
import {WorkoutComponent} from "./component/workout/workout.component";
import {HomeComponent} from "./component/home/home.component";
import {BlogsComponent} from "./component/workout/blogs/blogs.component";
import {Blogs1Component} from "./component/workout/blogs1/blogs1.component";
import {Blogs2Component} from "./component/workout/blogs2/blogs2.component";
import {CategoryComponent} from "./component/workout/category/category.component";
import {GiftAPlanComponent} from "./component/workout/gift-a-plan/gift-a-plan.component";
import {AllRecipeComponent} from "./component/RECIPES/all-recipe/all-recipe.component";
import {RecipePageComponent} from "./component/RECIPES/recipe-page-open/recipe-page-open.component";
import {RecipesPageComponent} from "./component/RECIPES/recipes-page/recipes-page.component";

export const routes: Routes = [

  { path:"activity" , component:ActivityComponent},
  { path: 'dashboard', component: UserDashboardComponent },
  {path: "workout" , component:WorkoutComponent},
  {path:"home" , component:HomeComponent},
  {path:"app-blogs" , component:BlogsComponent },
  {path: "app-blogs1" , component:Blogs1Component},
  {path: "app-blogs2" , component:Blogs2Component},
  {path: "app-category" , component:CategoryComponent},
  {path: "app-gift-a-plan" , component:GiftAPlanComponent},
  {path: "app-all-recipe" , component:AllRecipeComponent},
  {path: "app-recipe-page" , component:RecipePageComponent },
  {path: "app-recipes-page" , component:RecipesPageComponent },



];
