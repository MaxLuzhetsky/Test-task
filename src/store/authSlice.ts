import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  email?: string;
}

const initialState: AuthState = {
  isAuth: !!localStorage.getItem("Email"),
  email: localStorage.getItem("Email") || undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.isAuth = true;
      state.email = action.payload.email;
      localStorage.setItem("Email", action.payload.email);
      localStorage.setItem("Password", action.payload.password);
    },
    logout: (state) => {
      state.isAuth = false;
      state.email = undefined;
      localStorage.removeItem("Email");
      localStorage.removeItem("Password");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
