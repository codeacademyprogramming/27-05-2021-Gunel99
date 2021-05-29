import { ASYNC_STATUS } from "../../../redux/consts";
import { COFFEE_ACTIONS } from "../actions/consts";

const initialState = {
  data: [],
  error: null,
  status: ASYNC_STATUS.CREATED,
};

export function coffeeReducer(state = initialState, action) {
  switch (action.type) {
    case `${COFFEE_ACTIONS.GET_COFFEE}`:
      return {
        ...state,
        data: [],
        error: null,
        status: ASYNC_STATUS.IN_PROGRESS,
      };

    case `${COFFEE_ACTIONS.GET_COFFEE}_SUCCESS`:
      return {
        ...state,
        data: action.payload,
        error: null,
        status: ASYNC_STATUS.DONE,
      };
    default:
      break;
  }
  return state;
}
