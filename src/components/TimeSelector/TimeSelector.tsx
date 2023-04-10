import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setPeriod } from "../../store/slice/timeTracking";
import { TimePeriod } from "../../types/TimeTracking";
import Nav from "../Nav";

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
    <Nav>
      {Object.keys(timeOptions).map((option) => (
        <Nav.Item key={option} active={period === option}>
          <button onClick={(e) => onChangePeriod(option as TimePeriod)}>
            {timeOptions[option as TimePeriod].name}
          </button>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default TimeSelector;
