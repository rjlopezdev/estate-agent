import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { ActiveListComponent } from './active-list/active-list.component';
import { ActiveDetailComponent } from './active-detail/active-detail.component';
import { SimplePaginationService } from '../core/services/simple-pagination.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [ActiveListComponent, ActiveDetailComponent],
  providers: [SimplePaginationService]
})
export class AdminModule { }
