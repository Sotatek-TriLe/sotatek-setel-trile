import { Order } from './schemas/order.schema';
import { Status } from './interfaces/order.interface';

const OrderMachineConfig = {
  initialState: Status.Created,
  transitions: {
    [Status.Created]: {
      confirm: Status.Confirmed,
      cancel: Status.Cancelled
    },
    [Status.Confirmed]: {
      cancel: Status.Cancelled,
      deliver: Status.Delivered
    },
    [Status.Cancelled]: {},
    [Status.Delivered]: {}
  }
};

export class OrderStateMachine {
  data: Order;
  state: Status;
  previousState?: Status;
  static configs = OrderMachineConfig;

  constructor(data: Order) {
    this.data = data;
    this.previousState = null;
    this.state = data.status || OrderStateMachine.configs.initialState;
    this.data.status = this.state;
  }

  public can(transitionName): boolean {
    return !!OrderStateMachine.configs.transitions[this.state][transitionName];
  }

  public async commit() {
    return this.data.save();
  }

  public transition(transitionName): OrderStateMachine {
    const nextState = OrderStateMachine.configs.transitions[this.state][transitionName];
    if (!nextState)
      throw new Error(`Invalid transition: ${Status[this.state]} -> ${transitionName}`);
    this.previousState = this.state;
    this.state = nextState;
    this.data.status = this.state;
    return this;
  }
}
