type TimeTrack = {
  current: number;
  previous: number;
};

export type TimePeriod = "daily" | "weekly" | "monthly";
export type TimeCardColor =
  | "orange"
  | "blue"
  | "pink"
  | "green"
  | "violet"
  | "yellow";

export type TimeTracking = {
  title: "string";
  icon: string;
  color: TimeCardColor;
  timeframes: { [k in TimePeriod]: TimeTrack };
};
