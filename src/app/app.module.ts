import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// -- MODULES -- //
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from './charts/charts.module';

import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
