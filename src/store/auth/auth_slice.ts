import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/auth";

interface IState {
  user: IUser | null;
}

const initialState: IState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// export const {} = authSlice.actions

export default authSlice.reducer;
