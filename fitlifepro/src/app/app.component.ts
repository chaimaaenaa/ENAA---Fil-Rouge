import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import {LoginComponent} from "./component/login/login.component";
import {SharedModule} from "./shared/shared.module";
import {NzContentComponent, NzLayoutComponent, NzLayoutModule, NzSiderComponent} from "ng-zorro-antd/layout";
import {NzMenuDirective, NzMenuModule} from "ng-zorro-antd/menu";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline, LockOutline } from '@ant-design/icons-angular/icons';
import {rename} from "node:fs";
imports: [RouterOutlet, NzLayoutModule, NzMenuModule, NzIconModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignUpComponent, LoginComponent, SharedModule, NzLayoutComponent, NzSiderComponent, NzMenuDirective, NzContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitlifepro';
}



