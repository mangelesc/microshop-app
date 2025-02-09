import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/interfaces/product.interface';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  public searchInput = new FormControl('');
  public products: Product[] = [];
  public selectedProduct?: Product;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  searchProduct() {
    const value: string = this.searchInput.value || '';

    this.productsService
      .getProductsSuggestions(value)
      .subscribe((products) => (this.products = products));
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedProduct = undefined;
      return;
    }

    const product: Product = event.option.value;
    this.searchInput.setValue(product.title);

    this.selectedProduct = product;

    this.navigateToProduct(product);

    this.searchInput.reset();
  }

  navigateToProduct(product: Product) {
    if (product && product.id) {
      this.router.navigate(['/products', product.id]);
    }
  }
}
