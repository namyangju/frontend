import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt from "jsonwebtoken";

interface AuthType {
  accessToken?: string;
  refreshToken?: string;
  data?: {
    _id: string;
  };
}
const initialState: AuthType = {
  accessToken: localStorage.getItem("accessToken") || undefined,
  refreshToken: localStorage.getItem("refreshToken") || undefined,
  data:
    (localStorage.getItem("accessToken") &&
      (jwt.decode(localStorage.getItem("accessToken") as string) as any)) ||
    undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) {
      const { accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.data = jwt.decode(accessToken) as any;
    },
  },
});

export default authSlice;
