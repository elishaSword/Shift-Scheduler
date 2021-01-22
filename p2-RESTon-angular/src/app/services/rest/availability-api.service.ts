import { AvailabilityInterface } from './../../interfaces/availability-interface';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Availability } from 'src/app/models/availability';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AvailabilityApiService {

  constructor(private api: ApiService) { }

  public get(): Promise<AvailabilityInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<AvailabilityInterface[]>(`availability`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getById(availability: Availability): Promise<AvailabilityInterface> {
    return new Promise((resolve, reject) => {
      this.api.get<AvailabilityInterface>(`availability/${availability.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public post(availability: Availability): Promise<AvailabilityInterface> {
    return new Promise((resolve, reject) => {
      this.api.post<AvailabilityInterface>(`availability`, availability).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public put(availability: Availability): Promise<AvailabilityInterface> {
    return new Promise((resolve, reject) => {
      this.api.put<AvailabilityInterface>(`availability`, availability).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public delete(availability: Availability): Promise<AvailabilityInterface> {
    return new Promise((resolve, reject) => {
      this.api.delete<AvailabilityInterface>(`availability/${availability.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
