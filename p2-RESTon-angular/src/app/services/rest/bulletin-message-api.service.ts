import { Injectable } from '@angular/core';
import { BulletinMessageInterface } from 'src/app/interfaces/bulletin-message-interface';
import { BulletinMessage } from 'src/app/models/bulletin-message';
import { ApiService } from './api.service';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BulletinMessageApiService {

  constructor(private api: ApiService) { }

  public get(): Promise<BulletinMessageInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<BulletinMessageInterface[]>(`all-bulletin-message`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getById(bulletinMessage: BulletinMessage): Promise<BulletinMessageInterface> {
    return new Promise((resolve, reject) => {
      this.api.get<BulletinMessageInterface>(`bulletin-message?id=${bulletinMessage.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }





  public post(bulletinMessage: BulletinMessage): Promise<BulletinMessageInterface> {
    return new Promise((resolve, reject) => {
      this.api.post<BulletinMessageInterface>(`insert-bulletin-message`, bulletinMessage).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public put(bulletinMessage: BulletinMessage): Promise<BulletinMessageInterface> {
    return new Promise((resolve, reject) => {
      this.api.put<BulletinMessageInterface>(`update-bulletin-message`, bulletinMessage).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public delete(bulletinMessage: BulletinMessage): Promise<BulletinMessageInterface> {
    return new Promise((resolve, reject) => {
      this.api.delete<BulletinMessageInterface>(`delete-bulletin-message?id=${bulletinMessage.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
