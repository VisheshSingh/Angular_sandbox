import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  constructor() { }

  ngOnInit() {
    this.users = [
      // {
      //   firstName: 'John',
      //   lastName: 'Doe',
      //   age: 30,
      //   address: {
      //     street: '123 main st',
      //     city: 'Boston',
      //     state: 'MA'
      //   }
      // },
      // {
      //   firstName: 'Kevin',
      //   lastName: 'Smith',
      //   age: 25 ,
      //   address: {
      //     street: '55 main st',
      //     city: 'New York',
      //     state: 'NY'
      //   }
      // },
      // {
      //   firstName: 'Peter',
      //   lastName: 'Hung',
      //   age: 38,
      //   address: {
      //     street: '555 New Road',
      //     city: 'Princeton',
      //     state: 'NJ'
      //   }
      // }
    ];

    this.showExtended = false;

    // this.addUser({
    //   firstName: 'Robert',
    //   lastName: 'Chang',
    //   age: 24,
    //   address: {
    //     street: '555 Rainier st',
    //     city: 'Dallas',
    //     state: 'TX'
    //   }
    // })
  }

  addUser(user: User){
    this.users.push(user);
  }

}
