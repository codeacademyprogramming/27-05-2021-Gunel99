import { ORDER_ACTIONS } from "../actions/const";

export function orderReducer(state = orders, action) {
  let newOrders;
  switch (action.type) {
    case ORDER_ACTIONS.GET_ORDERS:
      newOrders =[...state];
      action.payload;
      return newOrders;      

    case ORDER_ACTIONS.ADD_ORDERS:
      newOrders =[...state];
      newOrders.push(action.payload);
      return newOrders;

  }
  return state;
}
