import TimeSelectorItem from "../TimeSelectorItem.tsx";

type TimeSelectorProps = {};

const TimeSelector: React.FC<TimeSelectorProps> = ({}) => {
  return (
    <nav className="p-8 bg-blue-dark rounded">
      <ul className="grid gap-5">
        <TimeSelectorItem>Daily</TimeSelectorItem>
        <TimeSelectorItem>Weekly</TimeSelectorItem>
        <TimeSelectorItem>Monthly</TimeSelectorItem>
      </ul>
    </nav>
  );
};

export default TimeSelector;
