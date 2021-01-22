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
      this.api.get<UserInterface[]>('User').pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getById(): Promise<UserInterface> {
    return new Promise((resolve, reject) => {
      this.api.get<UserInterface>('User').pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public post(User: User): Promise<UserInterface> {
    return new Promise((resolve, reject) => {
      this.api.post<UserInterface>('User', User).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public put(User: User): Promise<UserInterface> {
    return new Promise((resolve, reject) => {
      this.api.put<UserInterface>('User', User).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public delete(User: User): Promise<UserInterface> {
    return new Promise((resolve, reject) => {
      this.api.delete<UserInterface>('User').pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
