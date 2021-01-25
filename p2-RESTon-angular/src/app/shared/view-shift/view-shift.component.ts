import { Component, Input, OnInit } from '@angular/core';
import { Shift } from 'src/app/models/shift';

@Component({
  selector: 'rev-view-shift',
  templateUrl: './view-shift.component.html',
  styleUrls: ['./view-shift.component.scss']
})
export class ViewShiftComponent implements OnInit {

@Input() shift: Shift;

  constructor() { }

  ngOnInit(): void {
    console.log(this.shift);
    console.log("------------");
  }

}
