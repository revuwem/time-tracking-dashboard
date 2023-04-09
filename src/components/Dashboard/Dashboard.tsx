import Card from "../Card";

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div>
      <Card
        title="Work"
        icon="images/icon-work.svg"
        color="orange"
        period="day"
        currentTime={32}
        previousTime={24}
      />
      <Card
        title="Play"
        icon="images/icon-play.svg"
        color="blue"
        period="day"
        currentTime={10}
        previousTime={8}
      />
      <Card
        title="Study"
        icon="images/icon-study.svg"
        color="pink"
        period="day"
        currentTime={4}
        previousTime={6}
      />
    </div>
  );
};

export default Dashboard;
