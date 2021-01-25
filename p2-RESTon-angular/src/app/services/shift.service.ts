import { Injectable } from '@angular/core';
import { Shift } from '../models/shift';
import { ScheduleApiService } from './rest/schedule-api.service';
import { ShiftApiService } from './rest/shift-api.service';
import { ScheduleService } from './schedule.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  apiSetUp: boolean = false;

  constructor(private shiftAPIService: ShiftApiService, private scheduleService: ScheduleService) { }

  postNewShift(shift: Shift): Promise<string> {

    return new Promise((resolve, reject) => {
      if(!this.apiSetUp) {
        shift.id = 100;
        this.scheduleService.addShiftToSchedule(shift);
        return resolve("Shift successfully added!");
      }
      this.shiftAPIService.post(shift)
      .then(shift => {
        this.scheduleService.addShiftToSchedule(shift);
        resolve("Shift successfully added!");
      })
      .catch(error => {
        console.log(error)
        reject("There was an issue adding the shift.")
      });
    })
  }

}

