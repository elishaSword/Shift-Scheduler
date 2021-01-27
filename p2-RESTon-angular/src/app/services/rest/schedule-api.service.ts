import { ScheduleInterface } from './../../interfaces/schedule-interface';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Schedule } from 'src/app/models/schedule';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ScheduleApiService {

  constructor(private api: ApiService) { }

  public get(): Promise<ScheduleInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<ScheduleInterface[]>(`all-schedules`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getById(schedule: Schedule): Promise<ScheduleInterface> {
    return new Promise((resolve, reject) => {
      this.api.get<ScheduleInterface>(`schedule/${schedule.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public post(schedule: Schedule): Promise<ScheduleInterface> {
    return new Promise((resolve, reject) => {
      this.api.post<ScheduleInterface>(`insert-schedule`, schedule).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public put(schedule: Schedule): Promise<ScheduleInterface> {
    return new Promise((resolve, reject) => {
      this.api.put<ScheduleInterface>(`update-schedule`, schedule).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }




  //same issue
  public delete(schedule: Schedule): Promise<ScheduleInterface> {
    return new Promise((resolve, reject) => {
      this.api.delete<ScheduleInterface>(`delete-schedule?id=${schedule.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
