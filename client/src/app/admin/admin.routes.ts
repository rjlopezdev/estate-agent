import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ActiveListComponent } from "./active-list/active-list.component";
import { ActiveDetailComponent } from "./active-detail/active-detail.component";

export const adminRoutes : Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: ActiveListComponent
    },
    {
        path: ':id',
        component: ActiveDetailComponent
    }
]