import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Orders, OrderDocument} from '../schemas/orders.schema';
import {Status} from '../order/create-orders.dto';
import {PaymentEntity} from "./payment-entity";

export type UpdateStt = {
    'name': string;
    'status': Status
}

@Injectable()
export class PaymentService {
    constructor(@InjectModel(Orders.name) private orderModel: Model<OrderDocument>) {
    }

    async updateStatus(nameList) {
        var res = [];
        for (const item of nameList) {
            let kq = Math.random();
            let stt: Status;
            if (kq <= 0.5) {
                stt = 2;
            } else {
                stt = 3
            }
            await this.orderModel.updateOne({"name": item}, {$set: {"status": stt}}).exec();
            res.push(new PaymentEntity(item, stt))
        }

        return res;

    }


}
