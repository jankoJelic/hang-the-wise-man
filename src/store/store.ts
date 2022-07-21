import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
// import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    appState: appSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export default store;
