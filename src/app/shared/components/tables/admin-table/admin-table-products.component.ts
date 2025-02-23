import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../../../core/interfaces/product.interface';

@Component({
  selector: 'app-admin-table-products',
  standalone: false,
  templateUrl: './admin-table-products.component.html',
  styleUrls: ['./admin-table-products.component.css'],
})
export class AdminTableProductsComponent implements AfterViewInit, OnChanges {
  @Input() data: Product[] = []; // Datos de productos
  @Input() columns: string[] = [
    'id',
    'title',
    'category',
    'price',
    'image',
    'actions',
  ]; // Columnas específicas
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('Datos de productos:', this.data); // Verifica si "category" está en los productos
      this.dataSource.data = this.data;
      this.updatePaginatorAndSort();
    }
  }

  ngAfterViewInit() {
    this.updatePaginatorAndSort();
  }

  private updatePaginatorAndSort() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Funciones para el manejo de acciones (editar, borrar)
  editProduct(product: Product) {
    console.log('Edit product:', product);
    // Lógica de edición aquí
  }

  deleteProduct(product: Product) {
    console.log('Delete product:', product);
    // Lógica de borrado aquí
  }
}
