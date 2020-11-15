import { Injectable } from '@nestjs/common';

export type UpdateStt = {
  name: string;
};

@Injectable()
export class PaymentService {
  async randomPayProcess(): Promise<boolean> {
    let res: boolean;
    const rd = Math.random();
    if (rd <= 0.5) {
      res = true;
    } else {
      res = false;
    }
    return res;
  }
}
