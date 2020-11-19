import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  async pay(): Promise<boolean> {
    return Math.random() <= 0.5;
  }
}
