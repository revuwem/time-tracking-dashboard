import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { resetTrack } from "../../store/slice/timeTracking";
import { TimePeriod, TimeTracking } from "../../types/TimeTracking";
import Dropdown from "../Dropdown";

type CardProps = {
  data: TimeTracking;
  index?: number;
};

const bgColor = {
  orange: "bg-cards-orange",
  blue: "bg-cards-blue",
  pink: "bg-cards-pink",
  green: "bg-cards-green",
  violet: "bg-cards-violet",
  yellow: "bg-cards-yellow",
};

const periodsAlias = {
  daily: "day",
  weekly: "week",
  monthly: "month",
};

const Card: React.FC<CardProps> = ({ data, index = 0 }) => {
  const dispatch = useDispatch();
  const period = useSelector<RootState, TimePeriod>(
    (state) => state.timeTracking.period
  );

  const onResetCurrentTrack = () => {
    dispatch(
      resetTrack({
        timeTrackingTitle: data.title,
        timePeriod: period,
        timeTrack: "current",
      })
    );
  };

  const onResetPreviousTrack = () => {
    dispatch(
      resetTrack({
        timeTrackingTitle: data.title,
        timePeriod: period,
        timeTrack: "previous",
      })
    );
  };

  const onResetAllTrack = () => {
    dispatch(
      resetTrack({
        timeTrackingTitle: data.title,
        timePeriod: period,
        timeTrack: "all",
      })
    );
  };

  const animationDelay = useMemo(() => index * 50, []);

  return (
    <div
      style={{
        animation: `wait ${animationDelay}ms, grow 0.3s ease-in-out ${animationDelay}ms`,
      }}
    >
      <div
        className={`h-16 md:h-[70px] px-4 rounded flex justify-end overflow-hidden opacity-70 dark:opacity-100 ${
          bgColor[data.color]
        }`}
      >
        <img src={data.icon} alt="" className="h-full -translate-y-2 " />
      </div>
      <section className="relative p-4 md:p-7 -mt-7 bg-blue-pale dark:bg-blue-dark rounded z-10 hover:bg-blue-darken dark:hover:bg-blue-darken hover:cursor-pointer transition">
        <div className="flex justify-between mb-6">
          <h3 className="font-medium text-lg text-black dark:text-white">
            {data.title}
          </h3>
          <Dropdown>
            <Dropdown.Item>
              <button onClick={() => onResetCurrentTrack()}>
                Reset current
              </button>
            </Dropdown.Item>
            <Dropdown.Item>
              <button onClick={() => onResetPreviousTrack()}>
                Reset previous
              </button>
            </Dropdown.Item>
            <Dropdown.Item>
              <button onClick={() => onResetAllTrack()}>Reset all</button>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div className="flex md:flex-col items-center md:items-start justify-between gap-1.5">
          <p className="font-light text-4xl md:text-6xl text-blue-dark dark:text-white">
            {data.timeframes[period].current}hrs
          </p>
          <p className="font-light text-capitalize text-base text-blue-lighten dark:text-blue-pale">
            Last {periodsAlias[period]} - {data.timeframes[period].previous}hrs
          </p>
        </div>
      </section>
    </div>
  );
};

export default Card;
