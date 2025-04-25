import { createSlice } from '@reduxjs/toolkit';

interface TimelineState {
  selectedPeriod: number;
}

const initialState: TimelineState = {
  selectedPeriod: 0,
};

export const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    setSelectedPeriod: (state, action) => {
      state.selectedPeriod = action.payload;
    },
  },
});

export const { setSelectedPeriod } = timelineSlice.actions;
export default timelineSlice.reducer;