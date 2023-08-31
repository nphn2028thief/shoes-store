import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/auth";

interface IState {
  user: IUser | null;
  accessToken: string;
}

const initialState: IState = {
  user: null,
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IState>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    clearAuth: (state) => {
      state.user = initialState.user;
      state.accessToken = initialState.accessToken;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
