import { Body, Controller, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}
  // call this to random true or false from payment app, res is sent to order app
  @Get('')
  async randomPay() {
    return this.paymentService.randomPayProcess();
  }
}
