import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  private userForm:FormGroup
  private user:any
  private errorMessage:string

  constructor(private builder:FormBuilder) {
    this.buildForm()
  }
  ngOnInit(){

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
    // alternate approach
   /* this.userForm = new FormGroup({
      name: new FormControl('',
        Validators.required),
      email: new FormControl('',
      [
        Validators.required,
        Validators.email
      ])
    }) */
  }
  
  save(){
    //console.log(this.userForm)
    if(this.userForm.status !='INVALID'){
      //alert(JSON.stringify(this.userForm.value))
      this.user={
        name: this.userForm.controls['name'].value,
        email: this.userForm.controls['email'].value
      }
    }else{
      this.errorMessage = 'Please verify your errors'
    }
  }
}
