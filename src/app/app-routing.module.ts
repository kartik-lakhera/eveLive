import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UnauthGuard } from './core/guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
    canActivate: [UnauthGuard],
  },
  {
    path: 'feature',
    loadChildren: () => import('./features/features.module').then((m) => m.FeaturesModule),
    canActivate: [AuthGuard],
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
