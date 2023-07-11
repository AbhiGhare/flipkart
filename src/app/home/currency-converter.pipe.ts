import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number){
    let a = (Math.round(value*81.86*100)/100).toFixed(0)
    return a
  }

}
