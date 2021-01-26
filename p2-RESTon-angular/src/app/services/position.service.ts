import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Position } from '../models/position';
import { PositionApiService } from './rest/position-api.service';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  apiWorking: boolean = false;

  positions: BehaviorSubject<Position[]> = new BehaviorSubject<Position[]>([
    {
      id: 1,
      name: 'Cook'
    },
    {
      id: 2,
      name: 'Waiter'
    },
    {
      id: 3,
      name: 'Manager'
    }
  ]);
  constructor(private positionApiService: PositionApiService) { }

  getPositions(): Promise<Position[]> {
    return new Promise((resolve, reject) => {
      if(!this.apiWorking) {
        return resolve(this.positions.value)
      }

      if(this.positions.value.length) {
        resolve(this.positions.value);
      }

      this.positionApiService.get()
      .then(res => {
        this.positions.next(res);
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        reject("There was an error getting all positions");
      })
    })
  }
}
