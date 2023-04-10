import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { fetchTimeTrackingData } from "./store/slice/timeTracking";
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

  return (
    <main className="min-h-screen px-5 py-10 bg-black grid place-content-center lg:place-content-stretch lg:place-items-center">
      {loading === "pending" && (
        <p className="text-white">Loading your productivity stats...</p>
      )}
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
          {data.map((item) => (
            <Card key={item.title} data={item} />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
