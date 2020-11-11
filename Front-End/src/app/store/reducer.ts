// src/app/store/reducer.ts

import {ActionsUnion, ActionTypes, Status} from './actions';

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  status: Status;
}


export const initialState = {
  items: [],
  cart: []
};

export function ShopReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:

      return {
        ...state,
        items: [...action.payload]
      };
    case ActionTypes.EmptyCart:
      return {
        ...state,
        cart: [],
      };

    case ActionTypes.ReducerAdd:
      // @ts-ignore
      return {
        ...state,
        items: [state.items.push(action.payload)]
      };
    case ActionTypes.Add:
      action.payload.status = 5;
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case ActionTypes.Remove:
      action.payload.status = 1;
      return {
        ...state,
        cart: [...state.cart.filter(item => item.name !== action.payload.name)]
      };
    default:
      return state;
  }

}


