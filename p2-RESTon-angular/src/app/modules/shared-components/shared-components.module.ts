import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleCalanderComponent } from 'src/app/shared/schedule-calander/schedule-calander.component';
import { RolesComponent } from 'src/app/shared/roles/roles.component';
import { ShiftsComponent } from 'src/app/shared/shifts/shifts.component';
import { BulletinComponent } from 'src/app/shared/bulletin/bulletin.component';
import { MessageComponent } from 'src/app/shared/message/message.component';
import { BulletinMessageComponent } from 'src/app/shared/bulletin-message/bulletin-message.component';
import { MessageFormComponent } from 'src/app/shared/message-form/message-form.component';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { ViewShiftComponent } from 'src/app/shared/view-shift/view-shift.component';
import { WeeklyViewComponent } from 'src/app/pages/shared/weekly-view/weekly-view.component';
import { WeeklyScheduleCalendarComponent } from 'src/app/shared/weekly-schedule-calendar/weekly-schedule-calendar.component';

@NgModule({
  declarations: [
    ScheduleCalanderComponent,
    RolesComponent,
    ShiftsComponent,
    BulletinComponent,
    MessageComponent,
    BulletinMessageComponent,
    MessageFormComponent,
    NavBarComponent,
    ModalComponent,
    ViewShiftComponent,
    WeeklyViewComponent,
    WeeklyScheduleCalendarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  exports: [
    ScheduleCalanderComponent,
    NavBarComponent,
    RolesComponent,
    ShiftsComponent,
    BulletinComponent,
    MessageComponent,
    BulletinMessageComponent,
    MessageFormComponent,
    ScheduleCalanderComponent,
    ModalComponent,
    ViewShiftComponent,
    WeeklyViewComponent,
    WeeklyScheduleCalendarComponent,
  ]
})
export class SharedComponentsModule { }
