import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-cancel-product',
  templateUrl: './cancel-product.component.html',
  styleUrls: ['./cancel-product.component.scss']
})
export class CancelProductComponent implements OnInit {
sendDelete(){
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const url = 'http://localhost:3000/order/delete/'+name;
  const headers = {'Content-Type': 'application/json'};
  return this.http.delete(url,{headers}).subscribe(res => console.log(res))
}
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
