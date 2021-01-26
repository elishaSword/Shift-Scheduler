import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShiftInterface } from 'src/app/interfaces/shift-interface';
import { Shift } from 'src/app/models/shift';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'rev-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})

export class ShiftsComponent implements OnInit {

  num: number[] = [
    6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5
  ]

  @Input() shift: Shift;
  viewModal: boolean = false;
  currentUser: string;

  empName: string = 'Dylan';
  startTime: any;
  endTime: any;
  testTime: number;
  color: string;
  increment: number;
  width: number;
  shiftObject;

  constructor(
    private route: Router
    ) { }

  ngOnInit(): void {
    this.initialize();
    this.currentUser = this.route.url.split('/')[1];
  }

  // Width of times (hours) are currently static pixels, needs to change to something more responsive
  calculateWidth(startTime: number): number {
    return startTime*100;
  }

  calculateIncrement(startTime: number): number {
    return (startTime/60)*100;
  }

  initialize(): void {
    this.startTime = +this.shift.shiftTime.getHours();
    this.endTime = this.shift.shiftTime.getHours() + 8;
    this.testTime = (this.endTime) - (this.startTime);
    this.color = 'aqua';
    this.increment = this.calculateIncrement(this.shift.shiftTime.getMinutes());
    this.width = this.calculateWidth(this.testTime);

    this.shiftObject = {
      'background-color': this.color,
      width: this.width + "px",
      left: this.increment + "px"
    }

  }

  viewModals(bool: boolean): void {
    this.viewModal = bool;
  }
}
