import { Routes } from '@angular/router';

export const appRoutes : Routes = [
    {
        path: '',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    }
]