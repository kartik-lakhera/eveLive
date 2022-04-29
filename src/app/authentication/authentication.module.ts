import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { SignupUserComponent } from './Components/signup-user/signup-user.component';
import { ForgetComponent } from './Components/forget/forget.component';
import { UiComponentModule } from '../ui-component/ui-component.module';


@NgModule({
  declarations: [
    LoginUserComponent,
    SignupUserComponent,
    ForgetComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    UiComponentModule
  ]
})
export class AuthenticationModule { }
