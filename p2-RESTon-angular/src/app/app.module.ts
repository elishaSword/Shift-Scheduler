import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing/landing-page/landing-page.component';
import { EmployeeDashboardComponent } from './pages/employee/employee-dashboard/employee-dashboard.component';
import { ManagerDashboardComponent } from './pages/manager/manager-dashboard/manager-dashboard.component';
import { ScheduleCalanderComponent } from './shared/schedule-calander/schedule-calander.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
