import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { environments } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/products/categories`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.baseUrl}/products/category/${category}`
    );
  }
}
