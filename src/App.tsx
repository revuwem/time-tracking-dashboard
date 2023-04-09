import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import TimeSelector from "./components/TimeSelector";

function App() {
  return (
    <main>
      <Profile name="Jeremy Dawson" photo="images/image-jeremy.png" />
      <TimeSelector />
      <Dashboard />
    </main>
  );
}

export default App;
