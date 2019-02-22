import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  constructor(private service : UserService) { }

  names;
  showTable;
  users;
  noTableMessage;

  ngOnInit() {

  this.names = this.service.getNames()
  //this.service.hasUsers()
  this.showTable = this.service.hasUsers()
  this.users = this.service.getUsers()
  this.noTableMessage = 'No Users Found'
  
  }
}
