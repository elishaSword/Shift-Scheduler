import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rev-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})

export class ShiftsComponent implements OnInit {

  empName: string = 'Dylan';


  // ------------- Below is experimental depending on how timestamp is sent as a response -------------
  // startTime: number = Date.now();
  startTime: any = +new Date('2021-01-20');
  endTime: any = +new Date('2021-01-21');

  testTime: number = (((this.endTime/1000)/60)/60) - (((this.startTime/1000)/60)/60);
    // ------------- ------------------------------------------------------------------- -------------


  color: string = 'green';

  // parse the string after the colon in time (i.e., 01:05 -> parsed -> 05 -> cast to integer)
  increment: number = this.calculateIncrement(0);

  // Need to capture the hours of work (start to miliseconds - end to miliseconds -> convert to hours (*1000, *60, *60))
  width: number = this.calculateWidth(5);

  shiftObject = {
    'background-color': this.color,
    width: this.width + "px",
    left: this.increment + "px"
  }

  constructor() { }

  ngOnInit(): void {
  }

  // Width of times (hours) are currently static pixels, needs to change to something more responsive
  calculateWidth(startTime: number): number {
    return startTime*100;
  }

  calculateIncrement(startTime: number): number {
    return (startTime/60)*100;
  }

}
