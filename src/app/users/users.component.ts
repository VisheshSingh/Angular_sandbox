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
          image:'https://placeimg.com/600/600/people/1',
          isActive: false
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
          image:'https://placeimg.com/600/600/people/2',
          isActive: true
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
          image:'https://placeimg.com/600/600/people/3'
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
