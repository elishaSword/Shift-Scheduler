import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleCalanderComponent } from 'src/app/shared/schedule-calander/schedule-calander.component';
import { RolesComponent } from 'src/app/shared/roles/roles.component';
import { ShiftsComponent } from 'src/app/shared/shifts/shifts.component';



@NgModule({
  declarations: [
    ScheduleCalanderComponent,
    RolesComponent,
    ShiftsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedComponentsModule { }
