import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LayoutComponent, FooterComponent, NavbarComponent]
})
export class CoreModule { }
