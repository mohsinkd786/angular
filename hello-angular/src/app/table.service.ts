import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
  getData(_number,_limit){
    let data =[]
    for(let i=1;i<=_limit;i++){
      let result ={
        number : _number,
        quotient: i,
        sum : _number + i,
        diff :  _number - i,
        mul :  _number * i
      }
      data.push(result)
    }
    return data
  }
}
