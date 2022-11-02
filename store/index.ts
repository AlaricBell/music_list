import { configureStore } from "@reduxjs/toolkit";
import { reducer as songReducer } from "./song/songSlice";

const reducers = {
  song: songReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export default store;
