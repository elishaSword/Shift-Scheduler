import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RolesComponent } from './shared/roles/roles.component';
import { ShiftsComponent } from './shared/shifts/shifts.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    ShiftsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
