import {Body, Controller, Put} from '@nestjs/common';
import {PaymentService} from "./payment.service";
import {UpdateStt} from "../order/order.service";

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) {
    }

    @Put('paycart')
    async updateStatus(@Body() body: {nameList:string[]}) {
        return this.paymentService.updateStatus(body.nameList);
    }

}
