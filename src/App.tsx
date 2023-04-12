import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { fetchTimeTrackingData } from "./store/slice/timeTracking";
import { useDarkMode } from "usehooks-ts";
import { TimeTracking } from "./types/TimeTracking";
import { Loading } from "./types/AppState";
import Profile from "./components/Profile";
import TimeSelector from "./components/TimeSelector";
import Card from "./components/Card";

function App() {
  const loading: Loading = useSelector<RootState>(
    (state) => state.timeTracking.loading
  );
  const data = useSelector<RootState, TimeTracking[]>(
    (state) => state.timeTracking.data
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTimeTrackingData());
  }, []);

  const { isDarkMode, toggle } = useDarkMode();

  return (
    <main
      className={`min-h-screen px-5 py-10 grid place-content-center lg:place-content-stretch lg:place-items-center ${
        isDarkMode ? "dark bg-black" : "bg-gray"
      } `}
    >
      {loading === "pending" && (
        <p className="text-black dark:text-white">
          Loading your productivity stats...
        </p>
      )}
      <nav className="text-black dark:text-white">
        <button onClick={toggle}>Set Light Mode</button>
      </nav>
      {loading === "succeeded" && (
        <div className="w-full max-w-[1100px] grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:grid-flow-col items-end lg:items-stretch">
          <div className="row-span-full flex flex-col">
            <div className="grow z-10">
              <Profile name="Jeremy Dawson" photo="images/image-jeremy.png" />
            </div>
            <div className="-mt-6">
              <TimeSelector />
            </div>
          </div>
          {data.map((item, index) => (
            <Card key={item.title} data={item} index={index} />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
