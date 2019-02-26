import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqroot'
})
export class SqrootPipe implements PipeTransform {

  transform(_number:number): any {
    return Math.sqrt(_number);
  }
}
