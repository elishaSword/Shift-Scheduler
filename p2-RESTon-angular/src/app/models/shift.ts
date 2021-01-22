import { ShiftInterface } from './../interfaces/shift-interface';
import { Position } from './position';
import { Schedule } from './schedule';
import { User } from './user';
export class Shift implements ShiftInterface {
  id = 0;
  user = null;
  shiftTime = null;
  position = null;
  schedule = null;
}
