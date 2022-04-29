import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { FooterComponent } from './Components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
