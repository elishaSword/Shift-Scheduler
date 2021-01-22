import { Injectable } from '@angular/core';
import { PositionInterface } from './../../interfaces/position-interface';
import { Position } from 'src/app/models/position';
import { ApiService } from './api.service';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PositionApiService {

  constructor(private api: ApiService) { }

  public get(): Promise<PositionInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<PositionInterface[]>('Position').pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getById(): Promise<PositionInterface> {
    return new Promise((resolve, reject) => {
      this.api.get<PositionInterface>('Position').pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public post(Position: Position): Promise<PositionInterface> {
    return new Promise((resolve, reject) => {
      this.api.post<PositionInterface>('Position', Position).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public put(Position: Position): Promise<PositionInterface> {
    return new Promise((resolve, reject) => {
      this.api.put<PositionInterface>('Position', Position).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public delete(Position: Position): Promise<PositionInterface> {
    return new Promise((resolve, reject) => {
      this.api.delete<PositionInterface>('Position', Position).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
