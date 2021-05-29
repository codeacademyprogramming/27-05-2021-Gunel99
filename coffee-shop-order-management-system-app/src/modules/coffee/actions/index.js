import { COFFEE_ACTIONS } from "./consts";
import { coffeeService } from "../service";


export function getCoffee(dispatch) {
    dispatch({ type: COFFEE_ACTIONS.GET_COFFEE });

    coffeeService.getCoffee()
        .then(({ data }) => {
            dispatch({
                type: `${COFFEE_ACTIONS.GET_COFFEE}_SUCCESS`,
                payload: data,
            });
        })
    return;
}

export function addOrder(dispatch) {
    dispatch({ type: COFFEE_ACTIONS.ADD_COFFEE });

    coffeeService.getCoffee()
        .then(({ data }) => {
            dispatch({
                type: `${COFFEE_ACTIONS.ADD_COFFEE}_SUCCESS`,
                payload: data,
            });
        })
    return;
}

export function updateOrder(dispatch) {
    dispatch({ type: COFFEE_ACTIONS.UPDATE_COFFEE });

    coffeeService.getCoffee()
        .then(({ data }) => {
            dispatch({
                type: `${COFFEE_ACTIONS.UPDATE_COFFEE}_SUCCESS`,
                payload: data,
            });
        })
    return;
}
