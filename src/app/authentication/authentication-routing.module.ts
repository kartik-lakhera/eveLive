import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './Components/forget/forget.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { SignupUserComponent } from './Components/signup-user/signup-user.component';

const routes: Routes = [
  {
    path: "",
    component: LoginUserComponent
  },
  {
    path: "signupUser",
    component: SignupUserComponent
  },
  {
    path: "forget",
    component: ForgetComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
