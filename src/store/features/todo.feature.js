import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const { actions, reducer } = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push({ ...payload, id: nanoid(), isEdit: false });
    },
    removeItem: (state, { payload }) => {
      const newItems = state.items.filter((item) => item.id !== payload.id);
      state.items = newItems;
    },
    setEditItemStatus: (state, { payload }) => {
      const newItems = state.items.map((item) =>
        item.id === payload.id ? { ...item, isEdit: true } : item
      );

      state.items = newItems;
    },

    editItem: (state, { payload }) => {
      const newItems = state.items.map((item) =>
        item.id === payload.id ? { ...item, ...payload } : item
      );

      state.items = newItems;
    },
  },
});

export const { addItem, removeItem, setEditItemStatus, editItem } = actions;
export default reducer;
