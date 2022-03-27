import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const { actions, reducer } = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push({ ...payload, id: nanoid() });
    },
    removeItem: (state, { payload }) => {
      const newItems = state.items.filter((item) => item.id !== payload.id);
      state.items = newItems;
    },
  },
});

export const { addItem, removeItem } = actions;
export default reducer;
