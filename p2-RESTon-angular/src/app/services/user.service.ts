import { BehaviorSubject } from 'rxjs';
import { UserApiService } from './rest/user-api.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiWorking: boolean = false;

  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private userApiService: UserApiService) { }

  getAllEmployees(): Promise<User[]> {
    return new Promise((resolve, reject) => {

      if(!this.apiWorking) {
        return resolve([]);
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
