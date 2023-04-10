import { configureStore } from "@reduxjs/toolkit";
import timeTrackingReducer from "./slice/timeTracking"

export const store = configureStore({
  reducer: {
    timeTracking: timeTrackingReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
