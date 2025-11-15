import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
  standalone: true,
})
export class ProductFilterPipe implements PipeTransform {
  transform(items: any[], selectedValues: any[], field: string): any[] {
    if (!items) return [];
    if (!selectedValues || selectedValues.length === 0) return items;

    return items.filter((item) => selectedValues.includes(item[field]));
  }
}
