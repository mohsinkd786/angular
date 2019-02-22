import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
  getData(_number:number,_limit:number){
    let data:any[] = []
    for(let i=1;i<=_limit;i++){
      let result ={
        number : _number,
        quotient: i,
        sum : _number + i,
        diff :  _number - i,
        mul :  _number * i,
        div:  (_number / i).toFixed(2)
      }
      data.push(result)
    }
    return data
  }
}
