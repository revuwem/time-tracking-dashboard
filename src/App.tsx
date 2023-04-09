import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import TimeSelector from "./components/TimeSelector";

function App() {
  return (
    <main className="min-h-screen px-5 py-10 bg-black grid place-content-center lg:place-content-stretch lg:place-items-center">
      <div className="w-full max-w-[1100px] grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:grid-flow-col items-end lg:items-stretch">
        <div className="row-span-full flex flex-col">
          <div className="grow z-10">
            <Profile name="Jeremy Dawson" photo="images/image-jeremy.png" />
          </div>
          <div className="-mt-6">
            <TimeSelector />
          </div>
        </div>
        <Dashboard />
      </div>
    </main>
  );
}

export default App;
