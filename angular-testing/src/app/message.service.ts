import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getUser(name:string){
    return 'Name is :'+name
  }
}
