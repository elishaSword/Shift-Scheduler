import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rev-schedule-calander',
  templateUrl: './schedule-calander.component.html',
  styleUrls: ['./schedule-calander.component.scss']
})
export class ScheduleCalanderComponent implements OnInit {

  num: number = 80;

  constructor() { }

  ngOnInit(): void {
  }

}
