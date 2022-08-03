import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: { name: "популярности (вер)", sortProperty: "rating" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sort = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.pageCount = action.payload;
    },
    setFilters: (state, action) => {
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
    },
  },
});

export const { setCategoryId, setSortType, setCurrentPage, setFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
