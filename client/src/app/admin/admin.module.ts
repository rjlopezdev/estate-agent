import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { ActiveListComponent } from './active-list/active-list.component';
import { ActiveDetailComponent } from './active-detail/active-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [LoginComponent, ActiveListComponent, ActiveDetailComponent]
})
export class AdminModule { }
