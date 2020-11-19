import { Order } from '../orders/interfaces/order.interface';
import { Status } from './status';

export class OrderStateMachine {
  data: Order;
  state: Status;
  previousState?: Status;
  configs: {
    initialState: Status.Created;
    transitions: {
      [Status.Created]: {
        confirmed: Status.Confirmed;
        cancelled: Status.Cancelled;
      };
      [Status.Confirmed]: {
        cancelled: Status.Cancelled;
        delivered: Status.Delivered;
      };
    };
  };
  constructor(data: Order) {
    this.data = data;
    this.previousState = null;
    // this.state = data.status || this.configs.initialState;
    // this.data.status = this.state;
  }
  public can(transitionName): boolean {
    return !!this.configs.transitions[this.state][transitionName];
  }
  public newOrderSave(order: Order): Order {
    if (!order.status) {
      order.status = Status.Created;
      return order;
    } else {
      throw new Error(`Invalid status: ${order.status}, status should be void`);
    }
  }
  public save() {
    return this.data;
  }
  public transition(transitionName): OrderStateMachine {
    const nextState = this.configs.transitions[this.state][transitionName];
    if (!nextState)
      throw new Error(`Invalid transition: ${this.state} -> ${transitionName}`);
    this.previousState = this.state;
    this.state = nextState;
    return this;
  }

  canCancel(order: Order) {
    if (order.status === Status.Confirmed) {
      return true;
    }
    return false;
  }
}
