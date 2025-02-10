import { Component } from '@angular/core';
import { Product } from '../../../../core/interfaces/product.interface';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-list-products-page',
  standalone: false,
  templateUrl: './list-products-page.component.html',
  styleUrl: './list-products-page.component.css',
})
export class ListProductsPageComponent {
  public products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  // Con peticiones HTTP, montamos en componente en el iniico (OnInit)
  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((products) => (this.products = products));
    console.log(this.products);
  }
}
