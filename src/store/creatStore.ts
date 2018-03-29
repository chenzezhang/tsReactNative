import { createStore, applyMiddleware, compose, Store, Middleware, Reducer } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from 'react-redux';

import rootReducer from './../reducer/rootReducer';

const middlewares: Middleware[] = [
    createLogger(),
];

const initialState = {};

const store: Store<any> = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
));

export default store;
