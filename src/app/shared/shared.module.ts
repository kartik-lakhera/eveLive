import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { FooterComponent } from './Components/footer/footer.component';
import { UiComponentModule } from '../ui-component/ui-component.module';


@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    UiComponentModule
  ],
  exports:[
    HeaderComponent,
    MainLayoutComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
