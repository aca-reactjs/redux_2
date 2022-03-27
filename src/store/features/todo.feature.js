import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const { actions, reducer } = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push({
        ...payload,
        id: nanoid(),
        isEdit: false,
        isCompleted: false,
      });
    },
    removeItem: (state, { payload }) => {
      const newItems = state.items.filter((item) => item.id !== payload.id);
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

export const { addItem, removeItem, editItem } = actions;

export const selectTodoItems = createSelector((state) => state.todo.items);

export const selectCompletedTodos = createSelector(
  (state) => state.todo.items,
  (items) => items.filter((item) => item.isCompleted)
);

export default reducer;
