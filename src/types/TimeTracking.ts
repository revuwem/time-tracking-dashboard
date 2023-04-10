type TimeTrack = {
  current: number;
  previous: number;
};

export type TimeTracking = {
  title: "string";
  timeframes: { daily: TimeTrack; weekly: TimeTrack; monthly: TimeTrack };
};
