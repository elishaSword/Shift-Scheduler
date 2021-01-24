import { EmployeeScheduleViewComponent } from './../../pages/employee/employee-schedule-view/employee-schedule-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDashboardComponent } from 'src/app/pages/employee/employee-dashboard/employee-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardComponent,
    children :[
      {path: '', component: EmployeeScheduleViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDashboardRoutingModule { }
