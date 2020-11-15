import { HttpService, Injectable } from '@nestjs/common';
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
    constructor(@InjectModel(Orders.name) private orderModel: Model<OrderDocument>,private httpService:HttpService) {
    }

    updateStatus(nameList) {
        const res = [];
        const url ='http://localhost:3001/payment'
        for (const item of nameList) {
            let kq: boolean;
            let stt: number;
            this.httpService.get(url).subscribe((data) => {
                kq = data.data;
                if (kq === true) {
                    stt = 2;
                }
                if (kq === false) {
                    stt = 3;
                }
                ;
                this.orderModel.updateOne({ 'name': item }, { $set: { 'status': stt } }).exec();
                res.push(new PaymentEntity(item, stt));
                if (nameList.indexOf(item)===(nameList.length-1)){
                   return res;
               }
            });
        }

        return res;
    }



}
