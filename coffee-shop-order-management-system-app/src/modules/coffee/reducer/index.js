import { COFFEE_ACTIONS } from "../actions/consts";

export function coffeeReducer(state = [], action) {
  switch (action.type) {
    case COFFEE_ACTIONS.GET_COFFEE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      break;
  }
  return state;
}
