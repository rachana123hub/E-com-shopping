import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  // baseUrl = 'http://localhost:8080/product'
  baseUrl = 'http://localhost:3000/product'
  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.baseUrl);
  }
  getProduct(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }
}
