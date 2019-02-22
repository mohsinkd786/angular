import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getNames(){
    return [
      "Tommy", "Ethan", "Katherine","Price", "Andrews"
    ]
  }
  getUsers(){
    return [
      {
        name : 'Steve',
        phone : 11,
        address: "Red Stone drive"
      },
      {
        name : 'Marley',
        phone : 1,
        address: "Hardfort"
      },
      {
        name : 'Adams',
        phone : 2,
        address: "Long Island"
      }
    ]
  }
  hasUsers(){
    return this.getUsers().length > 0
  }
}
