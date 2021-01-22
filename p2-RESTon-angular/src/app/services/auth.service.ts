import { UserApiService } from './rest/user-api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private userApi: UserApiService) { }

  login(): Promise<string> {
    return new Promise((resolve, reject) => {

    })
  }
}
