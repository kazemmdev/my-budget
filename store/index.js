import { createStore, combineReducers, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import entriesReducer from "./entries.reducers";
import createSagaMiddleware from "redux-saga"

const sgaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    entries: entriesReducer
  }),
  composeWithDevTools(applyMiddleware(sgaMiddleware))
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
