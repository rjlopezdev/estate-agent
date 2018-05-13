import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/layout/layout.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
