import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setPeriod } from "../../store/slice/timeTracking";
import { TimePeriod } from "../../types/TimeTracking";
import TimeSelectorItem from "../TimeSelectorItem";

type TimeSelectorProps = {};

type TimeOptions = { [k in TimePeriod]: { name: string } };

const timeOptions: TimeOptions = {
  daily: {
    name: "Daily",
  },
  weekly: {
    name: "Weekly",
  },
  monthly: {
    name: "Monthly",
  },
};

const TimeSelector: React.FC<TimeSelectorProps> = ({}) => {
  const dispatch = useDispatch();
  const period = useSelector<RootState, TimePeriod>(
    (state) => state.timeTracking.period
  );

  const onChangePeriod = (period: TimePeriod) => dispatch(setPeriod(period));

  return (
    <nav className="p-8 pt-12 bg-blue-dark rounded">
      <ul className="flex justify-center md:flex-col gap-5">
        {Object.keys(timeOptions).map((option) => (
          <TimeSelectorItem key={option} active={period === option}>
            <button onClick={(e) => onChangePeriod(option as TimePeriod)}>
              {timeOptions[option as TimePeriod].name}
            </button>
          </TimeSelectorItem>
        ))}
      </ul>
    </nav>
  );
};

export default TimeSelector;
