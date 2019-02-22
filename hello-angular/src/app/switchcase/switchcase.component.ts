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

  private _ui:string ='Angular'
  private names:string[]

  ngOnInit() {
    this.names = this.service.getNames()
  }
  getName(event){
    alert('Dropdown clicked '+event.target.value)
  }
}
