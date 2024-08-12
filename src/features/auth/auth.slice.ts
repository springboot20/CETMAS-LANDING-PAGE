import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  role: string | null;
};

const initialState: InitialState = {
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
    },
    clearUserRole: (state) => {
      state.role = null;
    },
  },
  extraReducers: () => {},
});

export const authReducer = authSlice.reducer;
export const { setUserRole, clearUserRole } = authSlice.actions;
