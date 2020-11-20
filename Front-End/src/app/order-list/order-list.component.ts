import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {interval} from 'rxjs';
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
    this.listOrderLoad();
    interval(5000).subscribe(async () => this.listOrder = await this.http.get(this.url).toPromise());
  }
  displayedColumns: string[] = ['weight', 'symbol', 'symbol2', 'symbol3'];
  url = `${environment.orderUrl}/orders`;
  listOrder;
  async listOrderLoad() {
    this.listOrder = await this.http.get(this.url).toPromise()};
  ngOnInit(): void {
  }
  convertStatus(orderStatus: number): string{
    return Status[orderStatus];
  }
  async processpayment(id: string) {
    const url2 = this.url + `/${id}`;
    // @ts-ignore
    const processResult: { result: boolean, newStatus: number } = await this.http.post(url2).toPromise();
    if (processResult.result) {
      this.listOrder = await this.http.get(this.url).toPromise();
    } else { alert('Only Process Order with Created Status')}
    ;
  }
  async cancelOrder(id: string, status: number){
    if(status === 3){
      alert('This order has been cancelled');
      return;
    }
    const url2 = this.url + `/${id}/cancel`;
    // @ts-ignore
    const cancelResult: boolean = await this.http.post(url2).toPromise();
    if (cancelResult) {
      this.listOrder = await this.http.get(this.url).toPromise();
    } else { alert('Cannot cancel Order, this has been already delivered or this has not yet been confirmed ')}
    ;
  }

}
