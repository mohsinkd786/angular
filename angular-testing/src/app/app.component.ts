import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  constructor(private service:MessageService){}
  
  getMessage(msg:string){
    return msg
  }
  // calling service
  getUserDetails(name:string){
    return this.service.getUser(name)
  }

}
