const TimeSelectorItem: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <li className="text-blue-desaturated hover:text-white hover:cursor-pointer">
      {children}
    </li>
  );
};

export default TimeSelectorItem;
