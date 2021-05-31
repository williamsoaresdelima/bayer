import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTelefone'
})
export class PipeTelefone implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.replace(/(\d{2})(\d{4})(\d{4})/g, '\($1)\$2-\$3');
  }

}
