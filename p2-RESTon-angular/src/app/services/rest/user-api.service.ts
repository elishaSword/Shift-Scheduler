import { Injectable } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { User } from 'src/app/models/user';
import { ApiService } from './api.service';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private api: ApiService) { }

  public get(): Promise<UserInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<UserInterface[]>(`User`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getById(user: User): Promise<UserInterface> {
    return new Promise((resolve, reject) => {
      this.api.get<UserInterface>(`User/${user.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public post(user: User): Promise<UserInterface> {
    return new Promise((resolve, reject) => {
      this.api.post<UserInterface>(`User`, user).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public put(user: User): Promise<UserInterface> {
    return new Promise((resolve, reject) => {
      this.api.put<UserInterface>(`User`, user).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public delete(user: User): Promise<UserInterface> {
    return new Promise((resolve, reject) => {
      this.api.delete<UserInterface>(`User/${user.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
