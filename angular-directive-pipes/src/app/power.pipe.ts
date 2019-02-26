import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(_num: number, _power: number): any {
    return Math.pow(_num,_power);
  }
}
