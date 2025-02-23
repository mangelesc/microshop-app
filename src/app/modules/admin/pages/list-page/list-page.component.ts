import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsService } from '../../../../core/services/products.service';
import { CategoriesService } from '../../../../core/services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../../core/interfaces/product.interface';

@Component({
  selector: 'app-list-page',
  standalone: false,
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css',
})
export class ListPageComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  displayedColumns: string[] = []; // Columnas dinámicas
  route: string = '';

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtenemos la ruta activa
    const urlSegments = this.activatedRoute.snapshot.url;
    this.route = urlSegments.length > 1 ? urlSegments[1].path : '';
    this.fetchData(); // Llamamos a fetchData después de obtener la ruta
  }

  fetchData() {
    if (this.route === 'view-products') {
      this.productsService.getProducts().subscribe((products) => {
        this.products = products;
        this.displayedColumns = [
          'id',
          'title',
          'category',
          'price',
          'image',
          'actions',
        ]; // Definir las columnas para productos
      });
    } else if (this.route === 'view-categories') {
      this.categoriesService.getCategories().subscribe((categories) => {
        this.categories = categories;
        this.displayedColumns = ['category']; // Columnas para categorías
      });
    }
  }
}
