import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prise'
})
export class PrisePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `${value} ₽`;
  }

}
