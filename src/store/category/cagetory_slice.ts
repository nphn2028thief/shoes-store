import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
});

// export const {} = categorySlice.actions;

export default categorySlice.reducer;
