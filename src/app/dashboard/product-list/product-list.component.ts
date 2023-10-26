import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { IProduct } from '../../shared/models/products.model';
import { CartInfoService } from '../../shared/services/cart-info.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[];
  filter: string;
  filteredProduct: IProduct[];

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredProduct = this.filteredProducts(value);
  }
  filteredProducts(searchString: string) {
    return this.products.filter(product =>
      product.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  constructor(private _productService: ProductService, private _info: CartInfoService) { }
  ngOnInit() {
    this.productList();
  }
  productList() {
    this._productService.getProducts().subscribe((data) => {
      this.products = data
      this.filteredProduct = this.products
      this._info.sendInfo(this.products)
    },
      err => console.error(err),
    );
  }
  filterByCategory() {
    if (this.filter != 'noFilter') {
      this.filteredProduct = this.products.filter(product =>
        product.group.toLowerCase().indexOf(this.filter) !== -1);
    }
    else {
      this.filteredProduct = this.products
    }
  }
  //for server.js
  // ngOnInit() {
  //   let productData
  //   this.productService.getProducts().subscribe((data) => {
  //     productData = data
  //     this.products = productData.product;
  //     console.log(productData)
  //     console.log(this.products)
  //   },
  //     err => console.error(err),
  //   );

  // }


}


