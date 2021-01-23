import { ScheduleViewComponent } from './../../pages/manager/schedule-view/schedule-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerDashboardComponent } from 'src/app/pages/manager/manager-dashboard/manager-dashboard.component';
import { ScheduleCalanderComponent } from 'src/app/shared/schedule-calander/schedule-calander.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerDashboardComponent,
    children :[
      {path: '', component: ScheduleViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerDashboardRoutingModule { }
