import { Injectable } from '@angular/core';
import { UserData } from '../sign-up-form/store/sign-up-form.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private usersArray: UserData[];

  constructor() {
    this.usersArray = [];
  }

  add(data: UserData) {
    this.usersArray.push(data);
  }

  get() {
    return this.usersArray;
  }
}
