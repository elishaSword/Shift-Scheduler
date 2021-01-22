import { MessageInterface } from './../interfaces/message-interface';
import { User } from './user';
export class Message implements MessageInterface {
  id = 0;
  sender = null;
  content = '';
  time = null;
  reciever = null;
}
