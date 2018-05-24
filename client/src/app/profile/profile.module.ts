import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './profile.routes';
import { ClientRequestComponent } from './client-request/client-request.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes)
  ],
  declarations: [ProfileComponent, ClientRequestComponent, LoginComponent]
})
export class ProfileModule { }
