import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "~/types/category";

interface IState {
  categories: ICategory[];
}

const initialState: IState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
