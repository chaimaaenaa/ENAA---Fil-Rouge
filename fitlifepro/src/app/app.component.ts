import { Component } from '@angular/core';
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import {AboutUsComponent} from "./component/about-us/about-us.component";
import {BlogsComponent} from "./component/workout/blogs/blogs.component";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./component/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SignUpComponent,
    AboutUsComponent,
    BlogsComponent,
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // message:string='hello';
  //
  // passage:string[]=['youssef','hicham']
  // nom:string[]=['chaimaa', 'hajar', 'nadia']
  // // Array dial fruits
  // fruits: string[] = ['Pommes', 'Bananes', 'Oranges', 'Raisins', 'Pêches'];
  //
  // // Variable bach n7tt fiha natija dial search
  // searchResults: string[] = [];
  //
  // // Function search
  // search(query: any): void {
  //   let v = query.target.value;
  //   this.searchResults = this.fruits.filter(fruit =>
  //     fruit.toLowerCase().includes(query.toLowerCase())
  //   );
  // }
  // delete(index: number): void {
  //   this.fruits.splice(index, 1);
  // }
  //
  // editableFruit: string = '';
  // editIndex: number | null = null;
  //
  // // Function dial update
  // startEditing(index: number): void {
  //   this.editIndex = index;
  //   this.editableFruit = this.fruits[index];
  // }
  //
  // update(): void {
  //   if (this.editIndex !== null) {
  //     this.fruits[this.editIndex] = this.editableFruit;
  //     this.editIndex = null;
  //     this.editableFruit = '';
  //   }
  // }
  //
  // afficherItems(): string[] {
  //   return this.fruits;
  // }
  //
  // // Variable bach tzid item jdida
  // newFruit: string = '';
  //
  // // Function dial create bach tzid l item jdida
  // ajouterItem(): void {
  //   if (this.newFruit.trim() !== '') {
  //     this.fruits.push(this.newFruit);
  //     this.newFruit = ''; // tsafar input b3d ma t-add l item
  //   }
  // }

}
