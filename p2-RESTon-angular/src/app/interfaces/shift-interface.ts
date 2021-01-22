import { Schedule } from './../models/schedule';
import { Position } from './../models/position';
import { User } from "../models/user";

export interface ShiftInterface {
  id: number;
  user: User;
  shiftTime: Date;
  position: Position;
  schedule: Schedule;
}
