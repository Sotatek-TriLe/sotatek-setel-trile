import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AddProductComponent} from './add-product/add-product.component';
import {HomeComponent} from './home/home.component';
import {CancelProductComponent} from './cancel-product/cancel-product.component';

const routes: Routes = [
  {path: 'addorder', component: AddProductComponent },
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent },
  {path: 'cancelorder', component: CancelProductComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule {

}
