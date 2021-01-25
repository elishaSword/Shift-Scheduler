import { EmployeeShifts } from './../models/employee-shifts';
import { UserService } from './user.service';
import { ScheduleInterface } from './../interfaces/schedule-interface';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule';
import { Shift } from '../models/shift';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

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
            phone: 12,
            availability: null
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
            phone: 13,
            availability: null
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
            phone: 14,
            availability: null
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
            phone: 15,
            availability: null
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
            phone: 15,
            availability: null
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


  constructor(private userService: UserService) {}

  addShiftToSchedule(shift: Shift) {
    let schedules = this.schedules.value;
    schedules.find(e => e.id == shift.schedule.id).shifts.push(shift);
    this.schedules.next(schedules);
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
    let shifts = schedule.shifts.filter(s => s.shiftTime.getUTCDay() == day);

    for(let shift of shifts) {
      if(!shiftMap[shift.position.name]) {
        shiftMap[shift.position.name] = [];
      }
      shiftMap[shift.position.name].push(shift);
    }

    return shiftMap;
  }

  parseShiftsByEmployee(schedule: Schedule): Promise<EmployeeShifts[]> {
    return new Promise((resolve, reject) => {
      let employeeMap: EmployeeShifts[] = [];
      this.userService.getAllEmployees()
      .then(users => {
        for(let user of users) {
          let employeeShifts: EmployeeShifts = new EmployeeShifts();
          employeeShifts.employeeName = user.firstName + ' ' + user.lastName;
          employeeShifts.availability = user.availability

          let es = schedule.shifts.filter(shift => shift.user.id == user.id);
          for(let i=0;i<=6;i++) {
            if(es.filter(shift => shift.shiftTime.getUTCDay() == i).length){
              let shift = es.find(shift => shift.shiftTime.getUTCDay() == i);
              employeeShifts.shifts.push(shift);
            } else {
              employeeShifts.shifts.push(undefined);
            }


          }
          employeeMap.push(employeeShifts);
        }
        resolve(employeeMap);
      })
      .catch(error => {
        console.log(error);
      })


    });
  }

}
