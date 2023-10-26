import { Component, OnInit } from '@angular/core';
import { CartInfoService } from '../../shared/services/cart-info.service';
import { CartService } from '../../shared/services/cart.service';
import { CartProduct } from '../../shared/models/cart-product.model';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { LoginService } from '../../shared/services/login.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: CartProduct[] = []
  cartTotal = 0;
  filteredCart: CartProduct[];

  id = this._loginService.getToken()
  constructor(private _info: CartInfoService, private _cartService: CartService, private _router: Router, private _productService: ProductService, private _loginService: LoginService) { }
  ngOnInit() {
    this.handlecart()
    this.loadCartItems()
    this._info.sendInfo(this.cartProducts)
  }
  handlecart() {
    this._info.getInfo().subscribe(() => {
      this.loadCartItems()
    })
  }
  loadCartItems() {
    this._cartService.getCartProduct().subscribe((items: CartProduct[]) => {
      this.cartProducts = items;
      this.calcCartTotal();
    })
  }
  calcCartTotal() {
    this.cartTotal = 0;
    this.cartProducts.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
  handleAddToCart(id: number) {
    this._productService.getProduct(id).subscribe((product) => {
      this._cartService.addProductToCart(product, +this.id).subscribe(() => {
        this._info.sendInfo(product)
      })
    })
  }
  deleteItem(id: number) {
    this._cartService.deleteProduct(id).subscribe(() => {
      this.loadCartItems();
      this._info.sendInfo(this.cartProducts)
    })
  }
  payment() {
    this._router.navigate(['/payment'])
  }
  gotoHome() {
    this._router.navigate(['/product-list'])
  }
}
