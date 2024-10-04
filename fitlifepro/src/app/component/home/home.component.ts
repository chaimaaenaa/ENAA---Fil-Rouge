import { Component } from "@angular/core";

@Component({
  selector: "workout-trainer",
  templateUrl: "./workout-trainer.component.html",
  styleUrls: ["./workout-trainer.component.css"]
})
export class WorkoutTrainerComponent {
  navItems: string[] = ["Home", "About Us", "Contact Us", "Category", "Blogs", "Recipes"];
}
