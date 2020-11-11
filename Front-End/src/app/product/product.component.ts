// src/app/product/product.component.ts

import {Component, Input, OnChanges, OnInit, Type} from '@angular/core';
import { Store } from '@ngrx/store';
import {AddToCart, RemoveFromCart, UpdateStatus} from '../store/actions';
import {Status} from '../store/actions';

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  status: Status;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {
  constructor(private store: Store<{ items: []; cart: [] }>) {}

  inCart = false;
  @Input() product: Product;


  addToCart(item: Product) {
    if ( item.status === 3 || item.status === 4 || item.status === 2 ){
      alert('this item is alread process, try again with other order');
      return;
    }
    this.store.dispatch(new AddToCart(item));
    this.inCart = true;
  }

  removeFromCart(item: Product) {
    if ( item.status === 3 || item.status === 4 || item.status === 2 ){
      alert('this item is alread process, try again with other order');
      return;
    }
    this.store.dispatch(new RemoveFromCart(item));
    this.inCart = false;
  }
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  ngOnChanges(){
  }
  convertStatus(productStatus: string): string{
    return Status[productStatus];
  }
}
