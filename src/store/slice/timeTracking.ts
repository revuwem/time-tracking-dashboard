import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getTimeTrackingData } from "../../api";
import { Loading } from "../../types/AppState";
import {
  TimeTracking,
  TimePeriod,
  TimeTrack,
} from "../../types/TimeTracking";

export const fetchTimeTrackingData = createAsyncThunk(
  "timeTracking/fetchData",
  async () => {
    const res = await getTimeTrackingData();
    return res;
  }
);

type TimeTrackingState = {
  data: TimeTracking[];
  period: TimePeriod;
  loading: Loading;
};

const initialState: TimeTrackingState = {
  data: [],
  period: "daily",
  loading: "idle",
};

const timeTrackingSlice = createSlice({
  name: "timeTracking",
  initialState,
  reducers: {
    setPeriod: (state, action: PayloadAction<TimePeriod>) => {
      state.period = action.payload;
    },
    resetTrack: (
      state,
      action: PayloadAction<{
        timeTrackingTitle: string;
        timePeriod: TimePeriod;
        timeTrack: TimeTrack | "all";
      }>
    ) => {
      const { timeTrackingTitle, timePeriod, timeTrack } = action.payload;

      const timeTrackingTypeIdx = state.data.findIndex(
        (item) => item.title === timeTrackingTitle
      );

      if (timeTrack === "all") {
        const timeTracks =
          state.data[timeTrackingTypeIdx].timeframes[timePeriod];
        Object.keys(timeTracks).forEach((track) => {
          timeTracks[track as TimeTrack] = 0;
        });
      } else {
        state.data[timeTrackingTypeIdx].timeframes[timePeriod][timeTrack] = 0;
      }
    },
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

export const { setPeriod, resetTrack } = timeTrackingSlice.actions;

export default timeTrackingSlice.reducer;
