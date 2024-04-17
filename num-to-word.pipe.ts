import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToWord',
  standalone: true
})
export class NumToWordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const units = ['zero','one', 'two', 'three', 'four','five','six','seven', 'eight','nine'];
    const teens = ['ten','eleven' ,'tweleve','thirteen','fourteen','fifteen', 'sixteen', 'seventeen', 'eightteen','nineteen'];
    const tens = ['twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninty'];
    const inputValue = Number(value);
    let result = [];
    if(inputValue < 10){
      result.push(units[inputValue])
    } else if(inputValue <20){
      result.push(teens[inputValue - 10])
    } else if(inputValue < 100){
      result.push(tens[Math.floor(inputValue/10)-2])
      if(inputValue % 10 !== 0){
        result.push(this.transform(inputValue % 10));
      }
    } else if(inputValue < 1000) {
      result.push(units[Math.floor(inputValue / 100)]);
      result.push('hundred');
      if(inputValue % 100 !== 0){
        result.push('and');
        result.push(this.transform(inputValue % 100));
      }
    }
    return result.join(" ");
  }

}
