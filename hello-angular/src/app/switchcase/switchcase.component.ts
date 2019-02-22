import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { UseExistingWebDriver } from '../../../node_modules/protractor/built/driverProviders';
@Component({
  selector: 'app-switchcase',
  templateUrl: './switchcase.component.html',
  styleUrls: ['./switchcase.component.css']
})
export class SwitchcaseComponent implements OnInit {

  constructor(private service : UserService) { }

  names
  _ui ='Angular'
 
  ngOnInit() {
    this.names = this.service.getNames()
  }
  load(_number:Number,_quotient:Number){
    alert('Hello '+_number +' ' +_quotient)
  }
  getName(event){
    alert('Dropdown clicked '+event.target.value)
  }
}
