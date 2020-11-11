import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {select, Store} from '@ngrx/store';
import {Product} from '../product/product.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EmptyCart, GetItems} from '../store/actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class Dialog implements OnInit, OnDestroy {
  constructor(private store: Store<{ cart: [] }>, private http: HttpClient, private router: Router) {
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  }

  cart: Product[] = [];

async  paymentCart() {
    const listNameInCart = [];
    for (const product of this.cart) {
      listNameInCart.push(product.name);
    }
    const headers = {'Content-Type': 'application/json'};
    const url = 'http://localhost:3001/payment/paycart';
    await this.http.put(url, {nameList: listNameInCart}, {headers}).subscribe(res => console.log(res));
    this.store.dispatch(new EmptyCart());
  }

  ngOnInit(): void {

  }
  ngOnDestroy() {
    this.store.dispatch(new GetItems());
  }

}
