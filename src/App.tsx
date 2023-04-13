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
import ThemeSwitch from "./components/ThemeSwitch";

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
      className={`min-h-screen p-5 pb-10 grid place-content-center ${
        isDarkMode ? "dark bg-black" : "bg-gray"
      } `}
    >
      {loading === "pending" && (
        <p className="text-black dark:text-white">
          Loading your productivity stats...
        </p>
      )}

      {loading === "succeeded" && (
        <>
          <nav className="w-full text-black dark:text-white p-2 mb-4 grid justify-items-end">
            <ThemeSwitch isDark={isDarkMode} toggle={toggle} />
          </nav>

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
        </>
      )}
    </main>
  );
}

export default App;
