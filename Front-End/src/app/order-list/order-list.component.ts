import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
export enum Status {
  Created = 1,
  Confirmed = 2,
  Cancelled = 3,
  Delivered = 4,
}
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  constructor(private http: HttpClient) {
    http.get(this.url).subscribe((val) => {this.listOrder = val});
  }
  displayedColumns: string[] = ['weight', 'symbol', 'symbol2', 'symbol3'];
  listOrder;
  url = `${environment.orderUrl}/orders`;
  ngOnInit(): void {
  }
  convertStatus(orderStatus: number): string{
    return Status[orderStatus];
  }
  processpayment(id: string){
    const url2 = this.url + `/${id}`;
    console.log('url2',url2)
    // @ts-ignore
    this.http.get(url2);
  }
}
