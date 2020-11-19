import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../product/product.component';
import {select, Store} from '@ngrx/store';
import {EmptyCart} from '../store/actions';
import {FruitsService} from '../fruits.service';

type ProductNew = Product & { position: number };

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {

  constructor(private http: HttpClient, private store: Store<{ items: []; cart: [] }>, private fruitService: FruitsService ) {
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  }

  cart: Product[];
  // cartNew: ProductNew[];
  displayedColumns: string[] = ['name', 'desc', 'price'];
  // count() {
  //   for (const product of this.cart) {
  //     let index = 1;
  //     const productNew = {...product, position: index};
  //     index = index + 1;
  //     this.cartNew.push(productNew);
  //   }
  // }
  async createOrder() {
    const headers = {'Content-Type': 'application/json'};
    const url = `${environment.orderUrl}/orders`;
    let productList = '';
    for (const product of this.cart){
      productList += `${product.name} `;
      console.log('product list', productList);
    }
    await this.http.post(url, {productList}, {headers}).subscribe(res => console.log(res));
    this.store.dispatch(new EmptyCart());
    this.fruitService.inCart = false;
  }

  ngOnInit(): void {
  }

}

