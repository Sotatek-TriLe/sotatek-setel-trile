import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {ReducerAdd} from '../store/actions';
import {Product} from '../store/actions'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  value = '';

async addToHome() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const price = (document.getElementById('price') as HTMLInputElement).value;
    const desc = (document.getElementById('desc') as HTMLInputElement).value;
    const url = 'http://localhost:3000/order/create';
    const headers = {'Content-Type': 'application/json'};
    const body = { name: name, status: '1',image:"/assets/images/berries.jpeg",price: price, description: desc};
    const bar: Product = {name: name, status: 1,image:"/assets/images/berries.jpeg",price: 5, description: desc}
    await this.http.post(url, body, {headers}).subscribe(res => console.log(res));
    // this.store.dispatch(new ReducerAdd(bar))
  }

  constructor(private http: HttpClient, private store: Store<any>) { }

  ngOnInit(): void {
  }

}
