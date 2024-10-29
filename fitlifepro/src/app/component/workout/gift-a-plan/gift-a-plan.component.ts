import { Component } from '@angular/core';
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-gift-a-plan',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './gift-a-plan.component.html',
  styleUrl: './gift-a-plan.component.css'
})
export class GiftAPlanComponent {

}
