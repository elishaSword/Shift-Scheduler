import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';
@Component({
  selector: 'rev-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {

  schedules: Schedule[] = [];
  viewModal:string = "";

  constructor(
    private scheduleService: ScheduleService
    ) { }

  ngOnInit(): void {
    this.scheduleService.schedules.subscribe(schedules => {
      this.schedules = schedules;
      // this.currentSchedule = schedules[this.currentScheduleIndex];
    })
  }

  viewModals(modal: string): void{
    this.viewModal = modal;
  }
}
