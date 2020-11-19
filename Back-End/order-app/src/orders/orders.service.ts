import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Db, ObjectID } from 'mongodb';
import { Order } from '../orders/interfaces/order.interface';
import { CreateOrderDto } from './dtos/createOrder.dto';
import { UpdateOrderDto } from './dtos/updateOrder.dto';
import { OrderStateMachine } from './order.machine';
import { Status } from './status';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('DATABASE_CONNECTION') private db: Db,
    private orderStateMachine: OrderStateMachine,
  ) {
    // this.db
    //   .collection('ordersList')
    //   .drop()
    //   .catch((err) => console.log(`this is error: ${err} , continue `));
  }

  async find(): Promise<Order[]> {
    return await this.db.collection('ordersList').find().toArray();
  }

  async findOne(id: number): Promise<Order> {
    const response = await this.db.collection('ordersList').findOne({
      id: Number(id),
    });

    if (!response) {
      throw new NotFoundException();
    }

    return response;
  }

  async create(body: CreateOrderDto): Promise<void> {
    try {
      const body2 = this.orderStateMachine.newOrderSave(body as Order);
      body2.id = (await this.db.collection('ordersList').find().count()) + 1;
      await this.db.collection('ordersList').insert(body2);
      console.log('successfully insert');
    } catch (err) {
      console.log(err);
    }
  }

  async update(id: number, body: UpdateOrderDto): Promise<void> {
    if (!ObjectID.isValid(String(id))) {
      throw new BadRequestException();
    }

    await this.db.collection('ordersList').updateOne(
      {
        _id: new ObjectID(id),
      },
      {
        $set: {
          ...body,
        },
      },
    );
  }

  async delete(id: string): Promise<void> {
    if (!ObjectID.isValid(id)) {
      throw new BadRequestException();
    }

    const response = await this.db.collection('ordersList').deleteOne({
      _id: new ObjectID(id),
    });

    if (response.deletedCount === 0) {
      throw new NotFoundException();
    }
  }

  async requestCancel(id: number) {
    this.findOne(id).then(async (order) => {
      if (this.orderStateMachine.canCancel(order)) {
        await this.db
          .collection('ordersList')
          .updateOne(
            { id: Number(id) },
            { $set: { status: Status.Cancelled } },
          );
      }
      throw new Error(`Cannot cancel order id ${id}`);
    });
  }
}
