import { BulletinMessageInterface } from './../interfaces/bulletin-message-interface';
import { Position } from './position';
import { User } from './user';
export class BulletinMessage implements BulletinMessageInterface {
  id = 0;
  user: User;
  content = '';
  time = null;
  position = null;
}
