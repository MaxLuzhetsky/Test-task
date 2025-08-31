import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CoursesState {
  courses: number[];
}

const initialState: CoursesState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    purchase: (state, action: PayloadAction<number>) => {
      if (!state.courses.includes(action.payload)) {
        state.courses.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.courses = state.courses.filter(
        (courseId) => courseId !== action.payload
      );
    },
  },
});

export const { purchase, remove } = coursesSlice.actions;
export default coursesSlice.reducer;
