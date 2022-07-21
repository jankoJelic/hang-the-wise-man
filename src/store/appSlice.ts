import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "appState",
  initialState: {
    playerName: "",
    isLoading: false,
  },
  reducers: {
    setPlayerName: (state, action) => {
      state.playerName = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setPlayerName, setIsLoading } = appSlice.actions;

export default appSlice.reducer;
