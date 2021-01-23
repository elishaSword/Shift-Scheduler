import { ScheduleService } from './../../../services/schedule.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rev-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private scheduleSercice: ScheduleService) { }

  ngOnInit(): void {
    console.log(this.scheduleSercice.parseShifts(this.scheduleSercice.dummyData[0]));
    console.log('test');

  }

}
