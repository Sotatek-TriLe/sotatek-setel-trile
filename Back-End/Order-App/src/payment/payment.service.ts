import { HttpService, Injectable } from '@nestjs/common';
import {Order} from '../orders/schemas/order.schema';
import config from '../config';

@Injectable()
export class PaymentService {
  constructor(private httpService: HttpService) {}

  public async processPayment(order: Order): Promise<boolean> {
    const response = await this.httpService.post<any>(`${config.PaymentUri}/payment`).toPromise();
    return response.data;
  }
}
