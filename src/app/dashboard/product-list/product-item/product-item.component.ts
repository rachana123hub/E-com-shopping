import { Component, OnInit, Input } from '@angular/core';
import { CartInfoService } from '../../../shared/services/cart-info.service';
import { IProduct } from '../../../shared/models/products.model';
import { CartService } from '../../../shared/services/cart.service';
import { Router } from '@angular/router';
import { ConstantLabel } from '../../../shared/constant-label';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct
  id: number;
  constructor(private _info: CartInfoService, private _cartService: CartService, private _router: Router) { }
  ngOnInit(): void {
  }
  handleAddToCart() {
    this.id = +localStorage.getItem(ConstantLabel.currentUserToken)
    this._cartService.addProductToCart(this.product, this.id).subscribe(() => {
      this._info.sendInfo(this.product)
    })
  }
  viewProduct() {
    this._router.navigate(['/product-detail', this.product.id])
  }
}