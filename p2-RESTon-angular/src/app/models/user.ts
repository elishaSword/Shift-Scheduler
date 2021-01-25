import { Availability } from './availability';
import { UserInterface } from './../interfaces/user-interface';
export class User implements UserInterface {
  id = 0;
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  isManager = null;
  phone = 0;
  availability: Availability = null;
  constructor() {}
}
