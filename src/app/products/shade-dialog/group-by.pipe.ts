import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy',
})
export class GroupByPipe implements PipeTransform {
  transform(items: any[], groupSize: number): any[][] {
    const groupedItems = [];
    for (let i = 0; i < items.length; i += groupSize) {
      groupedItems.push(items.slice(i, i + groupSize));
    }
    return groupedItems;
  }
}
