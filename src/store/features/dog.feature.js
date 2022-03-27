import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchRandomDogRequest = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!res.ok) {
    throw new Error("Failed to fetch random dog");
  }

  const data = await res.json();

  return data;
};

export const fetchRandomDog = createAsyncThunk(
  "dog/fetchRandomDog",
  fetchRandomDogRequest
);

const initialState = {
  status: "idle",
  data: null,
  error: null,
};

const { reducer } = createSlice({
  name: "dog",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRandomDog.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(fetchRandomDog.fulfilled, (state, action) => {
      state.status = "success";

      state.data = action.payload;
    });

    builder.addCase(fetchRandomDog.rejected, (state, action) => {
      console.log(`🐞 / builder.addCase / action`, action);
      state.status = "error";

      state.error = action.error;
    });
  },
});

export const selectDog = (state) => state.dog;

export default reducer;
