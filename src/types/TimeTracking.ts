type TimeTrack = {
  current: number;
  previous: number;
};

export type TimePeriod = "daily" | "weekly" | "monthly";

export type TimeTracking = {
  title: "string";
  timeframes: { [k in TimePeriod]: TimeTrack };
};
