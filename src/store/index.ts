import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import coursesReducer from './coursesSlice'
import videoReducer from './videoSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    video: videoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;