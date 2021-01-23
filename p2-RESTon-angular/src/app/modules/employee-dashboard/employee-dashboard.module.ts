import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { EmployeeDashboardComponent } from 'src/app/pages/employee/employee-dashboard/employee-dashboard.component';


@NgModule({
  declarations: [
    EmployeeDashboardComponent,
  ],
  imports: [
    SharedComponentsModule,
    CommonModule,
    EmployeeDashboardRoutingModule,
  ]
})
export class EmployeeDashboardModule { }
