import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable()
export class DataService {
  users: User[];

  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohnDoe@gamil.com',
        isActive: false,
        registered: new Date("01/02/2018 08:30:00"),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Smith',
        email: 'KevinSmith@yahoo.com',
        isActive: true,
        registered: new Date("03/11/2017 07:45:00"),
        hide: true
      },
      {
        firstName: 'Peter',
        lastName: 'Hung',
        email:'PeterHung@hotmail.com',
        registered: new Date("05/03/2017 02:30:00"),
        hide: true
      }
    ];
  }

  getUsers(): User[] {
    console.log("Fetching users from service...");
    return this.users;
  }

  addUser(user: User){
    this.users.unshift(user);
  }

}
