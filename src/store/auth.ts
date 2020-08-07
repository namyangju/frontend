import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthType {
  accessToken?: string;
  refreshToken?: string;
}
const initialState: AuthType = {
  accessToken: localStorage.getItem("accessToken") || undefined,
  refreshToken: localStorage.getItem("refreshToken") || undefined,
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
    },
  },
});

export default authSlice;
