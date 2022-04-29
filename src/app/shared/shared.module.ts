import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent,
    SideNavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    MainLayoutComponent,
    SideNavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
