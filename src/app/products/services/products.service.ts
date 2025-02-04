import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getProductsById(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/${id}`);
  }
}
