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
  currentClasses: {};
  currentStyles: {};

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
          isActive: false,
          balance: 100,
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
          image:'https://placeimg.com/600/600/people/2',
          isActive: true,
          balance: 300,
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
          image:'https://placeimg.com/600/600/people/3',
          balance: 50,
          registered: new Date("05/03/2017 02:30:00")
        }
      ];
      
      this.loaded = true;  
      this.setCurrentClasses();
      this.setCurrentStyles();

    // this.addUser({
    //   firstName: 'Robert',
    //   lastName: 'Chang'
    // })
  }

  addUser(user: User){
    this.users.push(user);
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles(){
    this.currentStyles= {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

}
