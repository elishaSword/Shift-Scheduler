import { EmployeeShifts } from './../models/employee-shifts';
import { UserService } from './user.service';
import { ScheduleInterface } from './../interfaces/schedule-interface';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule';
import { Shift } from '../models/shift';
import { ScheduleApiService } from './rest/schedule-api.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  apiSetup: boolean = true;

  // schedules: BehaviorSubject<Schedule[]> = new BehaviorSubject<Schedule[]>([
  //   {
  //     id: 1,
  //     startDate: new Date('2021-01-17T00:00:00Z'),
  //     shifts: [
  //       {
  //         id: 1,
  //         user: {
  //           id: 1,
  //           firstName: 'George',
  //           lastName: 'Yoo',
  //           email: 'g@g.com',
  //           password: null,
  //           isManager: false,
  //           phone: 12,
  //           availability: null
  //         },
  //         shiftStartTime:  new Date('2021-01-20T06:00:00Z'),
  //         shiftEndTime:  new Date('2021-01-20T12:00:00Z'),
  //         position: {
  //           id: 1,
  //           name: 'Cook'
  //         },
  //         schedule: null
  //       },
  //       {
  //         id: 2,
  //         user: {
  //           id: 2,
  //           firstName: 'Dylan',
  //           lastName: 'Mahaffey',
  //           email: 'dylan@mail.com',
  //           password: null,
  //           isManager: false,
  //           phone: 13,
  //           availability: null
  //         },
  //         shiftStartTime:  new Date('2021-01-20T10:00:00Z'),
  //         shiftEndTime:  new Date('2021-01-20T18:00:00Z'),
  //         position: {
  //           id: 1,
  //           name: 'Cook'
  //         },
  //         schedule: null
  //       },
  //       {
  //         id: 3,
  //         user: {
  //           id: 3,
  //           firstName: 'Will',
  //           lastName: 'He',
  //           email: 'will@mail.com',
  //           password: null,
  //           isManager: false,
  //           phone: 14,
  //           availability: null
  //         },
  //         shiftStartTime:  new Date('2021-01-20T08:30:00Z'),
  //         shiftEndTime:  new Date('2021-01-20T10:30:00Z'),
  //         position: {
  //           id: 2,
  //           name: 'Waiter'
  //         },
  //         schedule: null
  //       },
  //       {
  //         id: 4,
  //         user: {
  //           id: 4,
  //           firstName: 'Calvin',
  //           lastName: 'Mak',
  //           email: 'calvin@mail.com',
  //           password: null,
  //           isManager: false,
  //           phone: 15,
  //           availability: null
  //         },
  //         shiftStartTime:  new Date('2021-01-20T12:15:00Z'),
  //         shiftEndTime:  new Date('2021-01-20T16:15:00Z'),
  //         position: {
  //           id: 2,
  //           name: 'Waiter'
  //         },
  //         schedule: null
  //       },
  //       {
  //         id: 5,
  //         user: {
  //           id: 4,
  //           firstName: 'Calvin',
  //           lastName: 'Mak',
  //           email: 'calvin@mail.com',
  //           password: null,
  //           isManager: false,
  //           phone: 15,
  //           availability: null
  //         },
  //         shiftStartTime:  new Date('2021-01-21T12:15:00Z'),
  //         shiftEndTime:  new Date('2021-01-21T16:15:00Z'),
  //         position: {
  //           id: 2,
  //           name: 'Waiter'
  //         },
  //         schedule: null
  //       },
  //     ],
  //     active: true
  //   },
  //   {
  //     id: 2,
  //     startDate: new Date('2021-01-24T00:00:00Z'),
  //     shifts: [
  //       {
  //         id: 6,
  //         user: {
  //           id: 1,
  //           firstName: 'George',
  //           lastName: 'Yoo',
  //           email: 'g@g.com',
  //           password: null,
  //           isManager: false,
  //           phone: 12,
  //           availability: null
  //         },
  //         shiftStartTime:  new Date('2021-01-24T06:00:00Z'),
  //         shiftEndTime:  new Date('2021-01-24T10:00:00Z'),
  //         position: {
  //           id: 1,
  //           name: 'Cook'
  //         },
  //         schedule: null
  //       },
  //       {
  //         id: 7,
  //         user: {
  //           id: 2,
  //           firstName: 'Dylan',
  //           lastName: 'Mahaffey',
  //           email: 'dylan@mail.com',
  //           password: null,
  //           isManager: false,
  //           phone: 13,
  //           availability: null
  //         },
  //         shiftStartTime:  new Date('2021-01-29T10:00:00Z'),
  //         shiftEndTime:  new Date('2021-01-29T15:00:00Z'),
  //         position: {
  //           id: 1,
  //           name: 'Cook'
  //         },
  //         schedule: null
  //       },
  //       {
  //         id: 8,
  //         user: {
  //           id: 3,
  //           firstName: 'Will',
  //           lastName: 'He',
  //           email: 'will@mail.com',
  //           password: null,
  //           isManager: false,
  //           phone: 14,
  //           availability: null
  //         },
  //         shiftStartTime:  new Date('2021-01-30T08:30:00Z'),
  //         shiftEndTime:  new Date('2021-01-30T16:30:00Z'),
  //         position: {
  //           id: 2,
  //           name: 'Waiter'
  //         },
  //         schedule: null
  //       },
  //       {
  //         id: 9,
  //         user: {
  //           id: 4,
  //           firstName: 'Calvin',
  //           lastName: 'Mak',
  //           email: 'calvin@mail.com',
  //           password: null,
  //           isManager: false,
  //           phone: 15,
  //           availability: null
  //         },
  //         shiftStartTime:  new Date('2021-01-27T12:15:00Z'),
  //         shiftEndTime:  new Date('2021-01-27T15:15:00Z'),
  //         position: {
  //           id: 2,
  //           name: 'Waiter'
  //         },
  //         schedule: null
  //       },
  //       {
  //         id: 10,
  //         user: {
  //           id: 4,
  //           firstName: 'Calvin',
  //           lastName: 'Mak',
  //           email: 'calvin@mail.com',
  //           password: null,
  //           isManager: false,
  //           phone: 15,
  //           availability: null
  //         },
  //         shiftStartTime:  new Date('2021-01-27T12:15:00Z'),
  //         shiftEndTime:  new Date('2021-01-27T18:15:00Z'),
  //         position: {
  //           id: 2,
  //           name: 'Waiter'
  //         },
  //         schedule: null
  //       },
  //     ],
  //     active: true
  //   }
  // ]);

  private schedules: BehaviorSubject<Schedule[]> = new BehaviorSubject<Schedule[]>([]);

  constructor(private userService: UserService, private sheduleAPIService: ScheduleApiService) {}

  getSchedules(): BehaviorSubject<Schedule[]> {
    this.sheduleAPIService.get()
    .then(e => this.schedules.next(e))
    .catch(err => console.log(err));
    return this.schedules;
  }

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
    let shifts = schedule.shifts.filter(s => s.shiftStartTime.getUTCDay() == day);

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
            if(es.filter(shift => shift.shiftStartTime.getUTCDay() == i).length){
              let shift = es.find(shift => shift.shiftStartTime.getUTCDay() == i);
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

  postSchedule() {
    return new Promise((resolve, reject) => {

      let schedule: Schedule;

      if(this.schedules.value.length) {
        let lastSchedule = this.schedules.value[this.schedules.value.length - 1];

        if(lastSchedule.active == false) {
          return reject("You can only create one schedule at a time.");
        }
        schedule = this.postFromLast(lastSchedule);

      } else {
        schedule = this.postFromNew();
      }

      console.log(schedule);

      if(!this.apiSetup) {
        this.schedules.next(this.schedules.getValue().concat(schedule));
        console.log(this.schedules.value);
        return resolve("Successfully created a new Schedule!");
      }
      this.sheduleAPIService.post(schedule)
      .then(e => {
        this.schedules.next(this.schedules.getValue().concat(schedule));
        resolve("Successfully created a new Schedule!");
      })
      .catch(error => {
        console.log(error);
        return reject("There was an error creating a new Schedule")
      })

    })
  }

  private postFromLast(lastSchedule: Schedule): Schedule {

    let schedule = new Schedule();
    if(!this.apiSetup) {
        let lastId =  lastSchedule.id + 1;
        schedule.id = lastId;
    }
    let lastStartDate = lastSchedule.startDate;
    schedule.startDate = moment(lastStartDate).add(7, "days").toDate();
    schedule.active = false;
    return schedule;
  }

  private postFromNew(): Schedule {
    let sunday = moment.utc().startOf('week').toDate();
    let schedule = new Schedule();
    schedule.startDate = sunday;
    schedule.active = false;
    return schedule;
  }

  pushSchedule() {
    return new Promise((resolve, reject) => {
      let lastSchedule = this.schedules.value[this.schedules.value.length - 1];
      let schedule = lastSchedule;

      if(!this.apiSetup) {
        if(!lastSchedule.active) {
          schedule.active = true;
          this.schedules.next(this.schedules.getValue().concat(schedule));
          console.log(this.schedules.value);
          resolve("Successfully pushed the Schedule!");
        } else {
          reject("This schedule has already been pushed.")
        }
      }

      if(!lastSchedule.active) {
        this.sheduleAPIService.put(schedule)
        .then(e => {
          this.schedules.next(this.schedules.getValue().concat(schedule));
          resolve("Successfully pushed the Schedule!");
        })
        .catch(error => {
          console.log(error);
          reject("This schedule has already been pushed.")
        })
      }
    })
  }
}
