import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerDashboardRoutingModule } from './manager-dashboard-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ManagerDashboardComponent } from 'src/app/pages/manager/manager-dashboard/manager-dashboard.component';


@NgModule({
  declarations: [
    ManagerDashboardComponent,
  ],
  imports: [
    CommonModule,
    ManagerDashboardRoutingModule,
    SharedComponentsModule,
  ]
})
export class ManagerDashboardModule { }
