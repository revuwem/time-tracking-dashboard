export type TimeTrack = "current" | "previous";
export type TimePeriod = "daily" | "weekly" | "monthly";
export type TimeCardColor =
  | "orange"
  | "blue"
  | "pink"
  | "green"
  | "violet"
  | "yellow";

export type TimeFrame = { [k in TimeTrack]: number };

export type TimeTracking = {
  title: string;
  icon: string;
  color: TimeCardColor;
  timeframes: { [k in TimePeriod]: TimeFrame };
};
