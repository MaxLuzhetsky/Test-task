import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoState {
  progress: Record<number, number>; 
  completed: number[];
}

const initialState: VideoState = {
  progress: {},
  completed: [],
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setProgress: (state, action: PayloadAction<{ id: number; time: number }>) => {
      state.progress[action.payload.id] = action.payload.time;
    },
    markCompleted: (state, action: PayloadAction<number>) => {
      if (!state.completed.includes(action.payload)) {
        state.completed.push(action.payload);
      }
    },
  },
});

export const { setProgress, markCompleted } = videoSlice.actions;
export default videoSlice.reducer;
