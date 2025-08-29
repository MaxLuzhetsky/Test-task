// store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CoursesState {
   courses:number[]
}

const initialState: CoursesState = {
    courses:[]
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    purchase: (state, action: PayloadAction<number>) => {
     if(!state.courses.includes(action.payload)){
        state.courses.push(action.payload)
     }
    },
 
  },
});

export const { purchase } = coursesSlice.actions;
export default coursesSlice.reducer;
