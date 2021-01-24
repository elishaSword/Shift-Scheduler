import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Position } from '../models/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

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
  constructor() { }

  getPositions(): BehaviorSubject<Position[]> {
    return this.positions;
  }
}
