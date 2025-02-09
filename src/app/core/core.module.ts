import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    ProductsService, // Proveemos el servicio ProductService
    CategoriesService, // Proveemos el servicio CategoryService
  ],
  exports: [],
})
export class CoreModule {}
