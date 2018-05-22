import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { SimplePaginationComponent } from './simple-pagination/simple-pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SimplePaginationComponent],
  declarations: [LayoutComponent, FooterComponent, NavbarComponent, SimplePaginationComponent]
})
export class CoreModule { }
