import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './cart/payment/payment.component';

@NgModule({
  declarations: [
    CartComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports: [

    PaymentComponent
  ]
})
export class CartModule { }
