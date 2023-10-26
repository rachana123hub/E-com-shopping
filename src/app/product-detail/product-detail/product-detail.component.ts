import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { IProduct } from '../../shared/models/products.model';
import { CartInfoService } from '../../shared/services/cart-info.service';
import { CartService } from '../../shared/services/cart.service';
import { ConstantLabel } from '../../shared/constant-label';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  userId: number;
  product: IProduct;
  constructor(private _route: ActivatedRoute, private _productService: ProductService, private _cartService: CartService, private _info: CartInfoService, private _router: Router) { }

  ngOnInit(): void {
    this.id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProduct(this.id).subscribe((product) => {
      this.product = product;
      this._info.sendInfo(this.product);
    })
  }
  addtoCart() {
    this.userId = +localStorage.getItem(ConstantLabel.currentUserToken)
    this._cartService.addProductToCart(this.product, this.userId).subscribe(() => {
      this._info.sendInfo(this.product)
    })
  }
  gotoCart() {
    this.addtoCart();
    this._router.navigate(['/cart'])
  }
}
