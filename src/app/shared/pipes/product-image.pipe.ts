import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../products/interfaces/product.interface';

@Pipe({
  name: 'productImage',
  standalone: false,
})
export class ProductImagePipe implements PipeTransform {
  transform(product: Product): string {
    if (!product.id || !product.image) {
      return 'assets/no-image.png';
    }

    return product.image;
  }
}
