import { EmployeeScheduleViewComponent } from './../../pages/employee/employee-schedule-view/employee-schedule-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDashboardComponent } from 'src/app/pages/employee/employee-dashboard/employee-dashboard.component';
import { WeeklyViewComponent } from 'src/app/pages/shared/weekly-view/weekly-view.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardComponent,
    children :[
      {path: '', component: EmployeeScheduleViewComponent},
      {path: 'week-calendar', component: WeeklyViewComponent},
      // Lets change the below to something else
      {path: '**', redirectTo: "/week-calender"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDashboardRoutingModule { }
