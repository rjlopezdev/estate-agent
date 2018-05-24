import { Routes } from "@angular/router";
import { ActiveListComponent } from "./active-list/active-list.component";
import { ActiveDetailComponent } from "./active-detail/active-detail.component";

export const adminRoutes : Routes = [
    {
        path: '',
        component: ActiveListComponent
    },
    {
        path: ':id',
        component: ActiveDetailComponent
    }
]