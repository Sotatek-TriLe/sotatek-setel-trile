import {Status} from "../order/create-orders.dto";

export class PaymentEntity{
    name: string;
    status: Status;
    constructor(name: string, status: Status) {
        this.name= name;
        this.status = status;

    }
}
