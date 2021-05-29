import { ORDER_ACTIONS } from "./const";

export function getOrder(order) {
    return {
        type: ORDER_ACTIONS.GET_ORDERS,
        payload: order,
    }
}

export function addOrder(order) {
    return {
        type: ORDER_ACTIONS.ADD_ORDERS,
        payload: order,
    }
}
