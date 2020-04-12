import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prise'
})
export class PrisePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return `${value} ₽`;
  }

}
