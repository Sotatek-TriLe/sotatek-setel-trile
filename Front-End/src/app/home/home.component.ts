import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import { select, Store } from '@ngrx/store';
import {GetItems, UpdateStatus} from '../store/actions';
import { Product } from '../product/product.component';
import {Router} from '@angular/router';
import { timer } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<{ items: Product[]; cart: [] }>, private router: Router, private http: HttpClient) {
    store.pipe(select('shop')).subscribe(data => (this.items = data.items));
    router.events.subscribe((val) => { if (val) {this.store.dispatch(new GetItems());}});
    timer(5000, 5000).subscribe(val => {if (val) {this.updateToDelivered(this.items); }; });
    // interval(10000).pipe(delay(5000), mergeMap(() => (this.store.pipe(select('shop'))))).subscribe(data => this.updateToDelivered(data.items))
  }

  items: Product[] = [];

  ngOnInit(): any {
    this.store.dispatch(new GetItems());
  }
  updateToDelivered (productList: Product[]){
    for (const product of productList){
      if (product.status === 2){
        product.status = 4;
        const url = 'http://localhost:3000/order/update';
        this.http.put(url, {name: product.name, status: 4}, {headers: {'Content-Type': 'application/json'}} ).
        subscribe((data) => console.log(data));
      }
    }
    this.store.pipe(select('shop')).subscribe(data => (this.items = data.items));
  }


}
