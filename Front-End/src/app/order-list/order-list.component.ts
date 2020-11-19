import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  constructor(private http: HttpClient) {
    http.get(this.url).subscribe((val) => {this.listOrder = val; console.log(this.listOrder);});
  }
  displayedColumns: string[] = ['weight', 'symbol'];
  listOrder;
  url = `${environment.orderUrl}/orders`;
  ngOnInit(): void {
  }
}
