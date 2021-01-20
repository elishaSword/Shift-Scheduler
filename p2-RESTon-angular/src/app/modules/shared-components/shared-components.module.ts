import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleCalanderComponent } from 'src/app/shared/schedule-calander/schedule-calander.component';



@NgModule({
  declarations: [
    ScheduleCalanderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
