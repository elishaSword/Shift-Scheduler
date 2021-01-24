import { ScheduleInterface } from './../interfaces/schedule-interface';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  dummyData: Schedule[] = [
    {
      id: 1,
      startDate: new Date(),
      shifts: [
        {
          id: 1,
          user: {
            id: 1,
            firstName: 'George',
            lastName: 'Yoo',
            email: 'g@g.com',
            password: null,
            isManager: false,
            phone: 12
          },
          shiftTime:  new Date(),
          position: {
            id: 1,
            name: 'Cook'
          },
          schedule: null
        },
        {
          id: 2,
          user: {
            id: 2,
            firstName: 'Dylan',
            lastName: 'Mahaffey',
            email: 'dylan@mail.com',
            password: null,
            isManager: false,
            phone: 13
          },
          shiftTime:  new Date(),
          position: {
            id: 1,
            name: 'Cook'
          },
          schedule: null
        },
        {
          id: 3,
          user: {
            id: 3,
            firstName: 'Will',
            lastName: 'He',
            email: 'will@mail.com',
            password: null,
            isManager: false,
            phone: 14
          },
          shiftTime:  new Date(),
          position: {
            id: 2,
            name: 'Waiter'
          },
          schedule: null
        },
        {
          id: 4,
          user: {
            id: 4,
            firstName: 'Calvin',
            lastName: 'Mak',
            email: 'calvin@mail.com',
            password: null,
            isManager: false,
            phone: 15
          },
          shiftTime:  new Date(),
          position: {
            id: 2,
            name: 'Waiter'
          },
          schedule: null
        },
      ]
    }
  ];

  schedules: BehaviorSubject<Schedule[]> = new BehaviorSubject<Schedule[]>([
    {
      id: 1,
      startDate: new Date(),
      shifts: [
        {
          id: 1,
          user: {
            id: 1,
            firstName: 'George',
            lastName: 'Yoo',
            email: 'g@g.com',
            password: null,
            isManager: false,
            phone: 12
          },
          shiftTime:  new Date('2021-01-20T06:00:00Z'),
          position: {
            id: 1,
            name: 'Cook'
          },
          schedule: null
        },
        {
          id: 2,
          user: {
            id: 2,
            firstName: 'Dylan',
            lastName: 'Mahaffey',
            email: 'dylan@mail.com',
            password: null,
            isManager: false,
            phone: 13
          },
          shiftTime:  new Date('2021-01-20T10:00:00Z'),
          position: {
            id: 1,
            name: 'Cook'
          },
          schedule: null
        },
        {
          id: 3,
          user: {
            id: 3,
            firstName: 'Will',
            lastName: 'He',
            email: 'will@mail.com',
            password: null,
            isManager: false,
            phone: 14
          },
          shiftTime:  new Date('2021-01-20T08:30:00Z'),
          position: {
            id: 2,
            name: 'Waiter'
          },
          schedule: null
        },
        {
          id: 4,
          user: {
            id: 4,
            firstName: 'Calvin',
            lastName: 'Mak',
            email: 'calvin@mail.com',
            password: null,
            isManager: false,
            phone: 15
          },
          shiftTime:  new Date('2021-01-20T12:15:00Z'),
          position: {
            id: 2,
            name: 'Waiter'
          },
          schedule: null
        },
        {
          id: 5,
          user: {
            id: 4,
            firstName: 'Calvin',
            lastName: 'Mak',
            email: 'calvin@mail.com',
            password: null,
            isManager: false,
            phone: 15
          },
          shiftTime:  new Date('2021-01-21T12:15:00Z'),
          position: {
            id: 2,
            name: 'Waiter'
          },
          schedule: null
        },
      ]
    }
  ]);


  constructor() {}

  newShift(scheduleId: number) {
    // this.schedules.next(shift)
  }

  parseShifts(schedule: Schedule) {
    let shiftMap = {};
    for(let shift of schedule.shifts) {
      if(!shiftMap[shift.position.name]) {
        shiftMap[shift.position.name] = []
      }
      shiftMap[shift.position.name].push(shift);
    }

    return shiftMap;
  }

  parseShiftsByDay(schedule: Schedule, day: number) {
    let shiftMap = {};
    let shifts = schedule.shifts.filter(s => s.shiftTime.getUTCDate() == day);

    for(let shift of shifts) {
      if(!shiftMap[shift.position.name]) {
        shiftMap[shift.position.name] = [];
      }
      shiftMap[shift.position.name].push(shift);
    }

    return shiftMap;
  }

  parseShiftsByEmployee(schedule: Schedule) {
    let shiftMap = {};

    for(let shift of schedule.shifts) {
      if(!shiftMap[shift.user.firstName + ' ' + shift.user.lastName]) {
        shiftMap[shift.user.firstName + ' ' + shift.user.lastName] = [];
      }
      shiftMap[shift.user.firstName + ' ' + shift.user.lastName].push(shift);
    }

    return shiftMap;
  }

}
