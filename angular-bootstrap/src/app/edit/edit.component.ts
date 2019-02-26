import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private userModel:any
  
  constructor(private route:ActivatedRoute,private service:UserService,private router : Router) { }

  ngOnInit() {
    this.service.fetchUserByName(this.route.snapshot.params.name,(data)=>{
      this.userModel = JSON.parse(data)[0]
    })
  }
  update(){
    this.service.updateUser(this.userModel,(res)=>{
      // redirect to user list component
      this.router.navigate(['/user'])
    })
  }
}
