import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { createBrowserHistory } from 'history';
import {routerMiddleware} from "connected-react-router";

export const saga = createSagaMiddleware();

export const history = createBrowserHistory()

export const store = configureStore({
    reducer: rootReducer(history),
    devTools: true,
    middleware: [saga, routerMiddleware(history)]
});

saga.run(rootSaga);

export default store;