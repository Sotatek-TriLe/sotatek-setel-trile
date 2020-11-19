import { Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}
  // call this to random true or false from payment app, res is sent to order app
  @Post('')
  async pay() {
    return this.paymentService.pay();
  }
}
