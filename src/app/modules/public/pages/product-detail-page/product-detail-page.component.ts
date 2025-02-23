import { Component } from '@angular/core';
import {
  Product,
  Category,
} from '../../../../core/interfaces/product.interface';
import { ProductsService } from '../../../../core/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-detail-page',
  standalone: false,
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  public product?: Product;
  public quantity: number = 1;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.productsService.getProductById(id)))
      .subscribe((product) => {
        if (!product) return this.router.navigate(['/products']);

        this.product = product;
        return;
      });
  }

  goBack(): void {
    this.router.navigateByUrl('products');
  }

  updateQuantity(newValue: number) {
    this.quantity = newValue; // Aquí actualizas la cantidad con el valor emitido.
  }

  addToCart(): void {
    return;
  }
}
