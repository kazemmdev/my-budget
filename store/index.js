import { createStore, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import entriesReducer from "./entries.reducers";

export const store = createStore(
  combineReducers({
    entries: entriesReducer,‍
  }),
  composeWithDevTools()
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
