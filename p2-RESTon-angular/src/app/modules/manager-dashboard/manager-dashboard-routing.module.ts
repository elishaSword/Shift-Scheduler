import { ScheduleViewComponent } from './../../pages/manager/schedule-view/schedule-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerDashboardComponent } from 'src/app/pages/manager/manager-dashboard/manager-dashboard.component';
import { ProfileComponent } from 'src/app/pages/user/profile/profile.component';
import { ManagerBulletinComponent } from 'src/app/pages/manager/manager-bulletin/manager-bulletin.component';
import { ManagerShoutFormComponent } from 'src/app/pages/manager/manager-shout-form/manager-shout-form.component';
import { ManagerMessageFormComponent } from 'src/app/pages/manager/manager-message-form/manager-message-form.component';
import { ManagerWeeklyViewComponent } from 'src/app/pages/manager/manager-weekly-view/manager-weekly-view.component';
import { RegisterFormComponent } from 'src/app/pages/manager/register-form/register-form.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerDashboardComponent,
    children :[
      {path: '', component: ManagerBulletinComponent},
      {path: 'weekly-view', component: ManagerWeeklyViewComponent},
      {path: 'view-day', component: ScheduleViewComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'bulletin-form', component: ManagerShoutFormComponent},
      {path: 'message-form', component: ManagerMessageFormComponent},
      {path: 'register', component: RegisterFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerDashboardRoutingModule { }
