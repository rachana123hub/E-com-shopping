import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { PaymentComponent } from './cart/cart/payment/payment.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full',

  },
  {
    path: 'login',
    loadChildren: () => CoreModule
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    loadChildren: () => CartModule
  },
  {
    path: 'product-list',
    canActivate: [AuthGuard],
    loadChildren: () => DashboardModule
  },
  {
    path: 'product-detail/:id',
    canActivate: [AuthGuard],
    loadChildren: () => ProductDetailModule,
  },
  {
    path: 'payment',
    canActivate: [AuthGuard],
    component: PaymentComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: '**', redirectTo: '/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
