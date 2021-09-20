import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  activeUser = 'admin';

  setActiveUser(user: string) {
    this.activeUser = user;
  }
}
