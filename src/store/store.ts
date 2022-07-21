import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";

const store = configureStore({
  reducer: {
    appState: appSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
