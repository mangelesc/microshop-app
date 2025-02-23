import { Component } from '@angular/core';
import {
  Category,
  Product,
} from '../../../../core/interfaces/product.interface';
import { ProductsService } from '../../../../core/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CategoriesService } from '../../../../core/services/categories.service';

@Component({
  selector: 'app-list-products-page',
  standalone: false,
  templateUrl: './list-products-page.component.html',
  styleUrl: './list-products-page.component.css',
})
export class ListProductsPageComponent {
  public products: Product[] = [];
  public category?: string;

  categoryMap: { [key: string]: string } = {
    electronics: 'electronics',
    jewelery: 'jewelery',
    'mens-clothing': "men's clothing",
    'womens-clothing': "women's clothing",
  };

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,

    private activatedRoute: ActivatedRoute
  ) {}

  // Con peticiones HTTP, montamos en componente en el inicio (OnInit)
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ category }) => {
          if (category) {
            const formattedCategory = this.categoryMap[category] || category;
            this.category = formattedCategory;
            return this.categoriesService.getProductsByCategory(
              formattedCategory
            );
          } else {
            return this.productsService.getProducts();
          }
        })
      )
      .subscribe((products) => {
        this.products = products;
      });
  }
}
