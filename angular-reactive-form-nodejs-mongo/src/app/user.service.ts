import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient){ }
  
  fetchUsers(callback) {
    // fetch data from backend /server side
     this
    .http
    .get('http://localhost:4200/users')
    .subscribe(data=>{
      callback(data)
    },error=>{
      console.log('Unable to load data ',error)
    })
    //return users
 }

 addUser(name:string,email:string,callback){
  let users=[]
  this
  .http
  .post('http://localhost:4200/user/add',
  {
    "_id":13,
    "name": name,
    "email": email
  }  
  ).subscribe(response=>{
    //users = this.fetchUsers() 
    callback()
    //console.log('User was added successfully')
  },error=>{
    //users = this.fetchUsers()
    callback(error)
    //console.log('Unable to add the User',error)
  })
 }
}
