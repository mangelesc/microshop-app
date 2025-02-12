import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ProductCategoryRoutePipe',
  standalone: false,
})
export class ProductCategoryRoutePipe implements PipeTransform {
  transform(category: string): string {
    const formattedCategories: { [key: string]: string } = {
      electronics: 'electronics',
      jewelery: 'jewelery',
      "men's clothing": 'mens-clothing',
      "women's clothing": 'womens-clothing',
    };

    return formattedCategories[category] || '';
  }
}
