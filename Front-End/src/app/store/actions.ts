// src/app/store/actions.ts

import { Action } from '@ngrx/store';

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
}

export enum ActionTypes {
  Add = '[Product] Add to cart',
  Remove = '[Product] Remove from cart',
  LoadItems = '[Products] Load items from server',
  LoadSuccess = '[Products] Load success',
  UpdateStatus = '[Products] Update Status',
  ChangeToDelivered = 'Iterate among [Products] to change from Confirm To Deliverd',
  EmptyCart = 'Empty Cart',
  ReducerAdd = 'ReducerAdd'
}
export class ReducerAdd implements Action {
  readonly type = ActionTypes.ReducerAdd;


  constructor(public payload: Product) {}
}

export class EmptyCart implements Action {
  readonly type = ActionTypes.EmptyCart;
}
export class AddToCart implements Action {
  readonly type = ActionTypes.Add;


  constructor(public payload: Product) {}
}
export class AddToHome implements Action {
  readonly type = ActionTypes.Add;


  constructor(public payload: Product) {}
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: Product) {}
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}
export class UpdateStatus implements Action{
  readonly type = ActionTypes.UpdateStatus;
}
export class ChangeToDelivered implements Action{
  readonly type = ActionTypes.ChangeToDelivered;
}
export type ActionsUnion = EmptyCart | AddToCart | RemoveFromCart | LoadItems | GetItems | UpdateStatus | AddToHome | ChangeToDelivered | ReducerAdd;
