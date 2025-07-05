import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    // TODO: Implement number formatting logic
    return value?.toString() || '0';
  }
}
