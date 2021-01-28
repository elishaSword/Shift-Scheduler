import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'rev-manager-weekly-view',
  templateUrl: './manager-weekly-view.component.html',
  styleUrls: ['./manager-weekly-view.component.scss']
})
export class ManagerWeeklyViewComponent implements OnInit {

  error:string = '';

  constructor(
  private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
  }

  postSchedule(): void {
    this.scheduleService.postSchedule()
    .then(e => this.error = "")
    .catch(e => this.error = e);
  }

  pushSchedule(): void {
    this.scheduleService.pushSchedule();
  }

}
