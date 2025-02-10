import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/interfaces/product.interface';

@Pipe({
  name: 'customImage',
  standalone: false,
})
export class CustomImagePipe implements PipeTransform {
  transform(product: Product): string {
    const localIds = Array.from({ length: 20 }, (_, i) => i + 1);

    // Verifica si la imagen está disponible
    if (localIds.includes(product.id)) {
      return `assets/products/${product.id}.jpg`;
    } else {
      // Si no tiene una imagen válida, usa product.image o la predeterminada
      return product.image ? product.image : 'assets/noimage.jpg';
    }
  }
}
