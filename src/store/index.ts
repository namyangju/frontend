import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authSlice from "./auth";

const reducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});
export type RootState = ReturnType<typeof reducer>;

const store = configureStore({
  reducer,
});

export default store;
