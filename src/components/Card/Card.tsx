import Dropdown from "../Dropdown";

type CardProps = {
  title: string;
  icon: string;
  color: "orange" | "blue" | "pink" | "green" | "violet" | "yellow";
  period: "day" | "week" | "month";
  currentTime: number;
  previousTime: number;
};

const bgColor = {
  orange: "bg-cards-orange",
  blue: "bg-cards-blue",
  pink: "bg-cards-pink",
  green: "bg-cards-green",
  violet: "bg-cards-violet",
  yellow: "bg-cards-yellow",
};

const Card: React.FC<CardProps> = ({
  title,
  icon,
  color,
  period,
  currentTime,
  previousTime,
}) => {
  return (
    <div>
      {/* FIX: bg color not working if passed throw props */}
      <div
        className={`px-4 ${bgColor[color]} rounded flex justify-end translate-y-6`}
      >
        <img src={icon} alt="" />
      </div>
      <section className="relative p-4 md:p-8 bg-blue-dark rounded z-10 hover:bg-blue-darken hover:cursor-pointer">
        <div className="flex justify-between mb-6">
          <h3 className="font-medium text-lg text-white">{title}</h3>
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
        <div className="flex md:flex-col justify-between gap-1.5">
          <p className="font-light text-4xl md:text-6xl text-white">
            {currentTime}hrs
          </p>
          <p className="font-light text-capitalize text-base text-blue-pale">
            Last {period} - {previousTime}hrs
          </p>
        </div>
      </section>
    </div>
  );
};

export default Card;
