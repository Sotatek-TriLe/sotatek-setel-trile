
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from './store/effects';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {MatDialogModule} from '@angular/material/dialog'
import { ShopReducer } from './store/reducer';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentComponent } from './payment/payment.component';
import { AppRoutingModule } from './app-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { CancelProductComponent } from './cancel-product/cancel-product.component';
import {MatDialog} from '@angular/material/dialog';
import { Dialog } from './dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    PaymentComponent,
    AddProductComponent,
    CancelProductComponent,
    Dialog,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({shop: ShopReducer}),
    EffectsModule.forRoot([ShopEffects]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
