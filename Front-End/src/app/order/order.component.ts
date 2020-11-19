import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product/product.component';
import {select, Store} from '@ngrx/store';
import {EmptyCart} from '../store/actions';

type ProductNew = Product & { position: number };

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {

  constructor(private store: Store<{ items: []; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  }

  cart: Product[];
  // cartNew: ProductNew[];
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  // count() {
  //   for (const product of this.cart) {
  //     let index = 1;
  //     const productNew = {...product, position: index};
  //     index = index + 1;
  //     this.cartNew.push(productNew);
  //   }
  // }
  createOrder(): void {
    // sendCreateRequest();
    // empty cart
    this.store.dispatch(new EmptyCart());
  }

  ngOnInit(): void {
  }

}

