import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCep'
})
export class PipeCep implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.replace(/(\d{2})(\d{3})(\d{3})/g, '\$1.\$2-\$3');
  }

}
