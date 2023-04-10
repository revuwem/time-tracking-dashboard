import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTimeTrackingData } from "../../api";
import { Loading } from "../../types/AppState";

export const fetchTimeTrackingData = createAsyncThunk(
  "timeTracking/fetchData",
  async () => {
    const res = await getTimeTrackingData();
    return res;
  }
);

type TimeTrackingState = {
  data: [];
  loading: Loading;
};

const initialState = {
  data: [],
  loading: "idle",
} as TimeTrackingState;

const timeTrackingSlice = createSlice({
  name: "timeTracking",
  initialState,
  reducers: {},
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

export const {} = timeTrackingSlice.actions;

export default timeTrackingSlice.reducer;
