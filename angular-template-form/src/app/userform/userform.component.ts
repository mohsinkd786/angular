import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { User } from "../User";

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor() { }

  private userModel:User={
    name : 'Mom',
    email: 'aa@gmail.com'
  }

  ngOnInit() {
  }
  oneWay(data){
    this.userModel={
      name: data.name,
      email: data.email
    }
    alert(JSON.stringify(this.userModel))
  }
  twoWay(){
    alert(JSON.stringify(this.userModel))
  }
}