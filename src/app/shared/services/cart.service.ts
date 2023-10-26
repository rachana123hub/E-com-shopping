import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartProduct } from '../models/cart-product.model';
import { IProduct } from '../models/products.model';
import { map } from 'rxjs/operators';
import { ConstantLabel } from '../constant-label';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // baseUrl = "http://localhost:8080/cart"
  baseUrl = "http://localhost:3000/cart"
  
  constructor(private httpClient: HttpClient,private _loginService : LoginService) { }
userId=+this._loginService.getToken()
  getCartProduct(): Observable<CartProduct[]> {
    return this.httpClient.get<CartProduct[]>(this.baseUrl)
    .pipe(
      map((result: any[]) => {
        let cartItems: CartProduct[] = [];
        for (let item of result) {
          let productExists = false
          for (let i in cartItems) {
            if ( cartItems[i].productId === item.product.id) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }
          if (!productExists) {
            cartItems.push(new CartProduct(item.id, item.product, item.qty, item.userId));
          }
        }
        return cartItems;
      })
    );
  }
  addProductToCart(product: IProduct, userId: number): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, { product, userId })
  }

  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
  }
 
}