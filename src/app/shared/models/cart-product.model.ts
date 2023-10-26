import { IProduct } from './products.model';


export class CartProduct {
  id: number;
  productId: number;
  productName: string;
  imageUrl: string;
  qty: number;
  price: number;
  userId: number;

  constructor(id: number, product: IProduct, qty = 1, userId: number) {
    this.id = id;
    this.productId = product.id;
    this.productName = product.name;
    this.price = product.price;
    this.qty = qty;
    this.imageUrl = product.imageUrl;
    this.userId = userId;
  }
}