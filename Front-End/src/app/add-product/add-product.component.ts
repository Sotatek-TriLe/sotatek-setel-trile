import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  value = '';

addToHome() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const price = (document.getElementById('price') as HTMLInputElement).value;
    const desc = (document.getElementById('desc') as HTMLInputElement).value;
    const url = 'http://localhost:3000/order/create';
    const headers = {'Content-Type': 'application/json'};
    const body = { name: name, status: '1',image:"/assets/images/berries.jpeg",price: price, description: desc};
    return this.http.post(url, body, {headers}).subscribe(res => console.log(res));
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
