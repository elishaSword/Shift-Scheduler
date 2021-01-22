import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleCalanderComponent } from 'src/app/shared/schedule-calander/schedule-calander.component';
import { BulletinComponent } from 'src/app/shared/bulletin/bulletin.component';
import { MessageComponent } from 'src/app/shared/message/message.component';
import { BulletinMessageComponent } from 'src/app/shared/bulletin-message/bulletin-message.component';
import { MessageFormComponent } from 'src/app/shared/message-form/message-form.component';



@NgModule({
  declarations: [
    ScheduleCalanderComponent,
    BulletinComponent,
    MessageComponent,
    BulletinMessageComponent,
    MessageFormComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedComponentsModule { }
