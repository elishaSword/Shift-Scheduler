import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerDashboardRoutingModule } from './manager-dashboard-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ManagerDashboardComponent } from 'src/app/pages/manager/manager-dashboard/manager-dashboard.component';
import { NewShiftComponent } from 'src/app/components/manager/new-shift/new-shift.component';
import { ScheduleViewComponent } from 'src/app/pages/manager/schedule-view/schedule-view.component';



@NgModule({
  declarations: [
    ManagerDashboardComponent,
    ScheduleViewComponent,
  ],
  imports: [
    CommonModule,
    ManagerDashboardRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [
    ManagerDashboardComponent,
    NewShiftComponent
  ],
})
export class ManagerDashboardModule { }
