import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private userForm:FormGroup
  private user:any
  private errorMessage:string
  private isSaved:boolean
  private users:any[]

  constructor(private builder:FormBuilder,private service:UserService) {
    this.buildForm()
  }
  ngOnInit(){
    this.service.fetchUsers((data)=>{
      this.users = data
    })
  }
 
  buildForm() {
    this.userForm = this.builder.group({
      name: ['',Validators.required],
      email: ['',[
        Validators.required,
        Validators.email
      ]
    ]
    })
  }
  
  save(){
    if(this.userForm.status !='INVALID'){
      this.user={
        name: this.userForm.controls['name'].value,
        email: this.userForm.controls['email'].value
      }
      // Add a new User 
      this.service.buildAndCreateUser({ 
        name:this.user.name,
        email:this.user.email
      },(err)=>{
        if(err! =null){
          console.log('Unable to Process request')
          // re load users
          this.service.fetchUsers((users)=>{
            this.users = users
          })
        }else{
          // just to display the success message
          this.isSaved= true
          // reset the form
          this.userForm.reset()

          // re load users
          this.service.fetchUsers((users)=>{
            this.users = users
          })
        }
      })
    }else{
      this.errorMessage = 'Please verify your errors'
    }
  }
}