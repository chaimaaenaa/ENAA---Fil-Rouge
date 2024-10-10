import { Component } from '@angular/core';
import {UserService} from "../../service/user.service";
import {DecimalPipe} from "@angular/common";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    DecimalPipe,
    MatGridTile,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatGridList
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  statsData:any;
  constructor(private userService: UserService){}

  ngOnInit(){
    this.getStats();
  }

  getStats(){
    this.userService.getStats().subscribe(res=>{
      console.log(res);
      this.statsData=res;
    })
  }


}
