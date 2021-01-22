import { MessageInterface } from './../interfaces/message-interface';
export class Message implements MessageInterface {
  id = 0;
  sender = null;
  content = '';
  time = null;
  reciever = null;
}
