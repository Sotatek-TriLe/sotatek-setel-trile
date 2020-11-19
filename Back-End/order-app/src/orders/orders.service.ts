import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './schemas/order.schema';
import { CreateOrderDto } from './dtos/createOrder.dto';
import { OrderStateMachine } from './order.machine';
import { Status } from './interfaces/order.interface';
import { PaymentService } from '../payment/payment.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly paymentService: PaymentService,
    @InjectModel(Order.name) private orderModel: Model<Order>
  ) { }

  async find(): Promise<Order[]> {
    return this.orderModel.find().sort({ _id: -1 }).exec();
  }

  async findOne(id: string): Promise<Order> {
    try {
      const response = this.orderModel.findById(id).exec();
      if (!response) {
        throw new NotFoundException();
      }
      return response;
    } catch (error) {
      throw new BadRequestException;
    }
  }

  async create(input: CreateOrderDto): Promise<Order> {
    try {
      const order = new this.orderModel(input);
      const orderMachine = new OrderStateMachine(order);
      await orderMachine.commit();

      this.processOrder(orderMachine.data._id);

      return orderMachine.data;
    } catch (error) {
      throw new BadRequestException;
    }
  }

  async processOrder(id: string) {
    await this.processPayment(id);
    setTimeout(() => {
      this.deliverOrder(id)
    }, 5000);
  }

  async processPayment(id: string): Promise<OrderStateMachine> {
    const order = await this.orderModel.findById(id).exec();
    const orderMachine = new OrderStateMachine(order);

    const paymentResult = await this.paymentService.processPayment(orderMachine.data);
    const transition = paymentResult ? 'confirm' : 'cancel';

    orderMachine.transition(transition);

    await orderMachine.commit();
    return orderMachine;
  }

  async deliverOrder(id: string): Promise<OrderStateMachine> {
    const order = await this.orderModel.findById(id).exec();
    const orderMachine = new OrderStateMachine(order);

    orderMachine.transition('deliver');

    await orderMachine.commit();
    return orderMachine;
  }

  async cancel(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id).exec();
    const orderMachine = new OrderStateMachine(order);

    if (orderMachine.can('cancel')) {
      orderMachine.transition('cancel');
      await orderMachine.commit();
      return orderMachine.data;
    }

    throw new BadRequestException(`Cannot cancel order id ${id}`);
  }
}
