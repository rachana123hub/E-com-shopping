import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductService } from './shared/services/product.service';
import { CartInfoService } from './shared/services/cart-info.service';
import { HttpInterceptProviders } from './shared/http-interceptor/interceptor.index';
import { CartService } from './shared/services/cart.service';
import { LoginService } from './shared/services/login.service';
import { HttpLoaderComponent } from './shared/http-loader/http-loader.component';
import { LoaderService } from './shared/services/loader.service';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './shared/guards/auth.guard';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    HttpLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbRatingModule
  ],
  providers: [
    ProductService,
    CartService,
    LoginService,
    LoaderService,
    CartInfoService,
    HttpInterceptProviders,
    { provide: AuthGuard, useClass: AuthGuard }],
  bootstrap: [AppComponent]
})
export class AppModule { }
