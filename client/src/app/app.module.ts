import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
