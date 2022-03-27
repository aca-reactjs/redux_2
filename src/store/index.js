import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features";

const store = configureStore({ reducer });

store.subscribe(() => console.log(store.getState()));

export default store;
