import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { environments } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getProductById(id: string): Observable<Product | undefined> {
    return (
      this.http
        .get<Product>(`${this.baseUrl}/products/${id}`)
        // Si da error, retorno un observable de undefined  -- of
        .pipe(catchError((error) => of(undefined)))
    );
  }

  // LA API no tiene filtrado, por lo que lo hacermos desde el front
  getProductsSuggestions(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`).pipe(
      map(
        (products: Product[]) =>
          products
            .filter(
              (product) =>
                product.title.toLowerCase().includes(query.toLowerCase()) // Filtrado local
            )
            .slice(0, 6) // Limitar a 6 resultados
      )
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    if (!product.id) throw Error('Product id is required');

    return this.http.patch<Product>(
      `${this.baseUrl}/products/${product.id}`,
      product
    );
  }

  deleteProductById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/products/${id}`).pipe(
      map((resp) => true),
      catchError((err) => of(false))
    );
  }
}
