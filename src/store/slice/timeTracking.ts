import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getTimeTrackingData } from "../../api";
import { Loading } from "../../types/AppState";
import { TimePeriod } from "../../types/TimeTracking";

export const fetchTimeTrackingData = createAsyncThunk(
  "timeTracking/fetchData",
  async () => {
    const res = await getTimeTrackingData();
    return res;
  }
);

type TimeTrackingState = {
  data: [];
  period: TimePeriod;
  loading: Loading;
};

const initialState = {
  data: [],
  period: "daily",
  loading: "idle",
} as TimeTrackingState;

const timeTrackingSlice = createSlice({
  name: "timeTracking",
  initialState,
  reducers: {
    setPeriod: (state, action: PayloadAction<TimePeriod>) => {
      state.period = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTimeTrackingData.pending, (state, action) => {
      state.loading = "pending";
    });

    builder.addCase(fetchTimeTrackingData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = "succeeded";
    });
  },
});

export const {setPeriod} = timeTrackingSlice.actions;

export default timeTrackingSlice.reducer;
