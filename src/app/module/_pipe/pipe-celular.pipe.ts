import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCelular'
})
export class PipeCelular implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.replace(/(\d{2})(\d{5})(\d{4})/g, '\($1)\$2-\$3');
  }

}
