import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  }
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

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
          registered: new Date("01/02/2018 08:30:00"),
          hide: true
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
          registered: new Date("03/11/2017 07:45:00"),
          hide: true
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
          
          registered: new Date("05/03/2017 02:30:00"),
          hide: true
        }
      ];
      
      this.loaded = true;
  }

  addUser(){
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
  }

  toggleHide(user: User){
    user.hide = !user.hide;
  }

  onSubmit(e){
    console.log(123);
    e.preventDefault();
  }

  fireEvent(e){
    console.log(e.type);
    console.log(e.target.value);
  }
}
