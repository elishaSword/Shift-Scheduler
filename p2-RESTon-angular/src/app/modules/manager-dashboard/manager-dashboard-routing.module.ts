import { ScheduleViewComponent } from './../../pages/manager/schedule-view/schedule-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerDashboardComponent } from 'src/app/pages/manager/manager-dashboard/manager-dashboard.component';
import { WeeklyViewComponent } from 'src/app/pages/shared/weekly-view/weekly-view.component';
import { ProfileComponent } from 'src/app/pages/user/profile/profile.component';
import { ManagerBulletinComponent } from 'src/app/pages/manager/manager-bulletin/manager-bulletin.component';
import { ManagerShoutFormComponent } from 'src/app/pages/manager/manager-shout-form/manager-shout-form.component';
import { ManagerMessageFormComponent } from 'src/app/pages/manager/manager-message-form/manager-message-form.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerDashboardComponent,
    children :[
      {path: '', component: WeeklyViewComponent},
      {path: 'view-day', component: ScheduleViewComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'bulletin', component: ManagerBulletinComponent},
      {path: 'bulletin-form', component: ManagerShoutFormComponent},
      {path: 'message-form', component: ManagerMessageFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerDashboardRoutingModule { }
