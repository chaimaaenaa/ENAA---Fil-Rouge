import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
    imports: [
        NgForOf,
        HeaderComponent
    ],
  styleUrls: ['./category.component.css'] // Fixed 'styleUrl' to 'styleUrls'
})
export class CategoryComponent {
  // Corrected property declaration
  categories = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c8b9ff011b0d22abba8cb36d665e3047b7a8331cfe049c21630036de43c51be?placeholderIfAbsent=true&apiKey=fcaa7293172548b6a2e1a132d616c7c2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dictum quisque at amet pellentesque."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c8b9ff011b0d22abba8cb36d665e3047b7a8331cfe049c21630036de43c51be?placeholderIfAbsent=true&apiKey=fcaa7293172548b6a2e1a132d616c7c2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dictum quisque at amet pellentesque."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c8b9ff011b0d22abba8cb36d665e3047b7a8331cfe049c21630036de43c51be?placeholderIfAbsent=true&apiKey=fcaa7293172548b6a2e1a132d616c7c2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dictum quisque at amet pellentesque."
    }
  ];

  clientStories = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7b637747532b6d14fac3326e65114059a6f187b007279c8d8a0289827adfad8?placeholderIfAbsent=true&apiKey=fcaa7293172548b6a2e1a132d616c7c2",
      name: "Name will be here",
      date: "22 hiba, 2024"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7b637747532b6d14fac3326e65114059a6f187b007279c8d8a0289827adfad8?placeholderIfAbsent=true&apiKey=fcaa7293172548b6a2e1a132d616c7c2",
      name: "Name will be here",
      date: "22 hiba, 2024"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7b637747532b6d14fac3326e65114059a6f187b007279c8d8a0289827adfad8?placeholderIfAbsent=true&apiKey=fcaa7293172548b6a2e1a132d616c7c2",
      name: "Name will be here",
      date: "22 hiba, 2024"
    }
  ];
  clientTestimonials: any;
  advantageItems: any;
  navItems: any;
}
