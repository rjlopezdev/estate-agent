import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ClientRequestComponent } from './client-request/client-request.component';
import { LoginComponent } from './login/login.component';

export const profileRoutes : Routes = [
    {
        path: '',
        component: ProfileComponent
    },
    {
        path: 'contact',
        component: ClientRequestComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]