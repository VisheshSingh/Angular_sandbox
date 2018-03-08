import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;

  constructor() { 
    console.log('hey from constructor...');
    
  }

  ngOnInit() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '123 main st',
        city: 'Boston',
        state: 'MA'
      }
    }
  }

  

}

