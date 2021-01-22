import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleCalanderComponent } from 'src/app/shared/schedule-calander/schedule-calander.component';



@NgModule({
  declarations: [
    ScheduleCalanderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedComponentsModule { }
