import {
  TimeCardColor,
  TimePeriod,
  TimeTracking,
} from "../../types/TimeTracking";
import Dropdown from "../Dropdown";

type CardProps = {
  data: TimeTracking;
  period: TimePeriod;
};

const bgColor = {
  orange: "bg-cards-orange",
  blue: "bg-cards-blue",
  pink: "bg-cards-pink",
  green: "bg-cards-green",
  violet: "bg-cards-violet",
  yellow: "bg-cards-yellow",
};

const Card: React.FC<CardProps> = ({ data, period }) => {
  return (
    <div>
      <div
        className={`h-16 md:h-[70px] px-4 rounded flex justify-end overflow-hidden ${
          bgColor[data.color]
        }`}
      >
        <img src={data.icon} alt="" className="h-full -translate-y-2 " />
      </div>
      <section className="relative p-4 md:p-7 -mt-7 bg-blue-dark rounded z-10 hover:bg-blue-darken hover:cursor-pointer">
        <div className="flex justify-between mb-6">
          <h3 className="font-medium text-lg text-white">{data.title}</h3>
          <Dropdown>
            <Dropdown.Item>
              <button onClick={() => console.log("reset current")}>
                Reset current
              </button>
            </Dropdown.Item>
            <Dropdown.Item>
              <button onClick={() => console.log("reset previous")}>
                Reset previous
              </button>
            </Dropdown.Item>
            <Dropdown.Item>
              <button onClick={() => console.log("reset all")}>
                Reset all
              </button>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div className="flex md:flex-col items-center md:items-start justify-between gap-1.5">
          <p className="font-light text-4xl md:text-6xl text-white">
            {data.timeframes[period].current}hrs
          </p>
          <p className="font-light text-capitalize text-base text-blue-pale">
            Last {period} - {data.timeframes[period].previous}hrs
          </p>
        </div>
      </section>
    </div>
  );
};

export default Card;
