import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from '../demo-ng-zorro-antd/demo-ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline, LockOutline, DashboardOutline, FundOutline, SplitCellsOutline, ControlOutline } from '@ant-design/icons-angular/icons';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { en_US } from 'ng-zorro-antd/i18n';
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
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzDatePickerModule,
    CommonModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
    NzIconModule.forRoot(icons), // Now it's declared before use
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    CommonModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
    NzButtonModule,
    NzDatePickerModule,
  ]
})
export class SharedModule { }
