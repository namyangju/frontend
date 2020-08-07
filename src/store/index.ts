import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const reducer = combineReducers({});
export type RootType = ReturnType<typeof reducer>;

const store = configureStore({
  reducer,
});

export default store;
