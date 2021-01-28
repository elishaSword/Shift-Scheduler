import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  addDays(currentDate: Date, days: any) {
    let newDate: Date = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }

  dateFormatter(date: Date, days?:number ) {
    if(days) {
      date = this.addDays(date, days)
    }
    let newDate = this.dateDiff(date);
    let dateString: string = `
      ${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}
    `
    return dateString;
  }

  dateDiff(date: Date): any {
    let diff = date.getTimezoneOffset();
    let newTime = diff/60;
    return moment(date).add(newTime, 'hours').toDate();
  }

  changeTime(date: Date, newTime: string): Date {
    let newDateString: string = `
    ${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()} ${newTime}Z
  `
  return new Date(newDateString);
  }
}
