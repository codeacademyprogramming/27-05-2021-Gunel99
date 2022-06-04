import { COFFEE_ACTIONS } from "./consts";
import { coffeeService } from "../service";

export function getCoffee(dispatch) {
    dispatch({ type: COFFEE_ACTIONS.GET_COFFEE });

    coffeeService.getCoffee()
        .then(({ data }) => {
            dispatch({
                type: COFFEE_ACTIONS.GET_COFFEE,
                payload: data,
            });
        })
    return;
}

