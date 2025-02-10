import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../core/interfaces/product.interface';

@Component({
  selector: 'products-product-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input()
  public product!: Product;

  // Validación de Product
  ngOnInit(): void {
    if (!this.product) throw Error('Product property is required');
  }
}
