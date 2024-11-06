import { Component } from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-blogs2',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './blogs2.component.html',
  styleUrl: './blogs2.component.css'
})
export class Blogs2Component {

}
