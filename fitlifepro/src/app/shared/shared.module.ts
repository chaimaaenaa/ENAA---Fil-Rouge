import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline, LockOutline, DashboardOutline, FundOutline, SplitCellsOutline, ControlOutline } from '@ant-design/icons-angular/icons';
// Declare the icons array before using it
const icons: IconDefinition[] = [
  UserOutline,
  LockOutline,
  DashboardOutline,
  FundOutline,
  SplitCellsOutline,
  ControlOutline
];

@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
  ],
  exports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,

  ]
})
export class SharedModule { }
