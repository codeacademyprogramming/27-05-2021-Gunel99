import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { coffeeReducer } from "../modules/coffee/reducer";
import thunk from "redux-thunk";

const middlewares = [
    thunk,
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    coffees: coffeeReducer,
});

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)
));
