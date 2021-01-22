import { Injectable } from '@angular/core';
import { ShiftInterface } from './../../interfaces/shift-interface';
import { Shift } from 'src/app/models/shift';
import { ApiService } from './api.service';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShiftApiService {

  constructor(private api: ApiService) { }

  public get(): Promise<ShiftInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<ShiftInterface[]>('Shift').pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getById(): Promise<ShiftInterface> {
    return new Promise((resolve, reject) => {
      this.api.get<ShiftInterface>('Shift').pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public post(Shift: Shift): Promise<ShiftInterface> {
    return new Promise((resolve, reject) => {
      this.api.post<ShiftInterface>('Shift', Shift).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public put(Shift: Shift): Promise<ShiftInterface> {
    return new Promise((resolve, reject) => {
      this.api.put<ShiftInterface>('Shift', Shift).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public delete(Shift: Shift): Promise<ShiftInterface> {
    return new Promise((resolve, reject) => {
      this.api.delete<ShiftInterface>('Shift', Shift).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
