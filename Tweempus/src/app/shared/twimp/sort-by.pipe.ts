import { Pipe, PipeTransform } from '@angular/core';
import { Twimp } from './twimp.model';

@Pipe({
  name: 'sortBy',
  // Hace que el comportamiento sea el mismo ciclo de vida que los componentes, en cada cambio actua
  // Se desactiva el ciclo que tienen las directivas
  pure: false
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<Twimp>): any {
    if (array) {
      return array.sort((a:Twimp, b: Twimp) => +a.timestamp.replace(/-/g, '') - +b.timestamp.replace(/-/g,''));
    } else {
      return array;
    }
  }

}
