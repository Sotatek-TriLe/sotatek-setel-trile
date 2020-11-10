export class CreateOrdersDto {
    name: string;
    description: string;
    status: Status
}

export enum Status {
    Created=1,
    Confirmed=2,
    Cancelled=3,
    Delivered=4
}

export class UpdateOrder{
    name:string;
    status:Status
}
