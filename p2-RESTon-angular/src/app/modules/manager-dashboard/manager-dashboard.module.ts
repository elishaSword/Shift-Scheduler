import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerDashboardRoutingModule } from './manager-dashboard-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ManagerDashboardComponent } from 'src/app/pages/manager/manager-dashboard/manager-dashboard.component';
import { NewShiftComponent } from 'src/app/component/manager/new-shift/new-shift.component';
import { ScheduleViewComponent } from 'src/app/pages/manager/schedule-view/schedule-view.component';
import { EditShiftComponent } from 'src/app/component/manager/edit-shift/edit-shift.component';
import { ManagerBulletinComponent } from 'src/app/pages/manager/manager-bulletin/manager-bulletin.component';
import { ManagerMessageFormComponent } from 'src/app/pages/manager/manager-message-form/manager-message-form.component';
import { ManagerShoutFormComponent } from 'src/app/pages/manager/manager-shout-form/manager-shout-form.component';



@NgModule({
  declarations: [
    ManagerDashboardComponent,
    ScheduleViewComponent,
    NewShiftComponent,
    EditShiftComponent,
    ManagerBulletinComponent,
    ManagerMessageFormComponent,
    ManagerShoutFormComponent
  ],
  imports: [
    CommonModule,
    ManagerDashboardRoutingModule,
    SharedComponentsModule,
  ]
})
export class ManagerDashboardModule { }
