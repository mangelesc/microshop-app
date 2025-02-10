import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/interfaces/product.interface';

@Pipe({
  name: 'productTitle',
  standalone: false,
})
export class ProductTitlePipe implements PipeTransform {
  transform(product: Product, limit: number = 15): string {
    if (!product.id || !product.title) {
      return '';
    }

    return product.title.length > limit
      ? product.title.substring(0, limit) + '...'
      : product.title;
  }
}
