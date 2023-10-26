import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { CartProduct } from '../../shared/models/cart-product.model';
import { CartInfoService } from '../../shared/services/cart-info.service';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartProduct: CartProduct[]
  qty: number
  id: number
  constructor(private _cartService: CartService, private _info: CartInfoService, public loginService: LoginService) { }

  ngOnInit(): void {
    this._info.getInfo().subscribe(() => {
      this._cartService.getCartProduct().subscribe((products) => {
        this.qty = Object.keys(products).length;
      })
    })
  }
}
