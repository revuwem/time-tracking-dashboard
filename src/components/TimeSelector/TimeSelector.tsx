import TimeSelectorItem from "../TimeSelectorItem";

type TimeSelectorProps = {};

const TimeSelector: React.FC<TimeSelectorProps> = ({}) => {
  return (
    <nav className="p-8 pt-12 bg-blue-dark rounded">
      <ul className="flex justify-center md:flex-col gap-5">
        <TimeSelectorItem>Daily</TimeSelectorItem>
        <TimeSelectorItem>Weekly</TimeSelectorItem>
        <TimeSelectorItem>Monthly</TimeSelectorItem>
      </ul>
    </nav>
  );
};

export default TimeSelector;
