import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '123 main st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: false,
          registered: new Date("01/02/2018 08:30:00")
        },
        {
          firstName: 'Kevin',
          lastName: 'Smith',
          age: 25 ,
          address: {
            street: '55 main st',
            city: 'New York',
            state: 'NY'
          },
          isActive: true,
          registered: new Date("03/11/2017 07:45:00")
        },
        {
          firstName: 'Peter',
          lastName: 'Hung',
          age: 38,
          address: {
            street: '555 New Road',
            city: 'Princeton',
            state: 'NJ'
          },
          
          registered: new Date("05/03/2017 02:30:00")
        }
      ];
      
      this.loaded = true;

    // this.addUser({
    //   firstName: 'Robert',
    //   lastName: 'Chang'
    // })
  }

  addUser(user: User){
    this.users.push(user);
  }

}
