import { BehaviorSubject } from 'rxjs';
import { UserApiService } from './rest/user-api.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiWorking: boolean = false;

  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    {
      id: 1,
      firstName: 'George',
      lastName: 'Yoo',
      email: 'g@g.com',
      password: null,
      isManager: false,
      phone: 12
    },
    {
      id: 2,
      firstName: 'Dylan',
      lastName: 'Mahaffey',
      email: 'dylan@mail.com',
      password: null,
      isManager: false,
      phone: 13
    },
    {
      id: 3,
      firstName: 'Will',
      lastName: 'He',
      email: 'will@mail.com',
      password: null,
      isManager: false,
      phone: 14
    },
    {
      id: 4,
      firstName: 'Calvin',
      lastName: 'Mak',
      email: 'calvin@mail.com',
      password: null,
      isManager: false,
      phone: 15
    }
  ]);

  constructor(private userApiService: UserApiService) { }

  getAllEmployees(): Promise<User[]> {
    return new Promise((resolve, reject) => {

      if(!this.apiWorking) {
        return resolve(this.users.value);
      }

      if(this.users.value.length) {
        return resolve(this.users.value);
      }

      this.userApiService.get()
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        console.log(error);
        reject('There was an error getting all users');
      })
    })
  }
}
