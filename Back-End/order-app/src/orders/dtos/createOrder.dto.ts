import { IsNotEmpty } from 'class-validator';
import { Status } from '../interfaces/order.interface';
export class CreateOrderDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  productList: string;

  @IsNotEmpty()
  status: Status;
}
