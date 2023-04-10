type TimeSelectorItemProps = React.PropsWithChildren & { active?: boolean };

const TimeSelectorItem: React.FC<TimeSelectorItemProps> = ({
  active = false,
  children,
}) => {
  return (
    <li
      className={`hover:text-white hover:cursor-pointer ${
        active ? "text-white" : "text-blue-desaturated"
      } `}
    >
      {children}
    </li>
  );
};

export default TimeSelectorItem;
