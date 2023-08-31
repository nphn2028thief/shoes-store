import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showNavbarMobile: boolean;
}

const initialState: IState = {
  showNavbarMobile: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setShowNavbarMobile: (state, action: PayloadAction<boolean>) => {
      state.showNavbarMobile = action.payload;
    },
  },
});

export const { setShowNavbarMobile } = appSlice.actions;

export default appSlice.reducer;