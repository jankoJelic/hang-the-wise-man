import { Outlet, Link } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";

const App = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-max">
      <LandingScreen />
      {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/game">Game</Link>
        <Link to="/highscores">Expenses</Link>
      </nav> */}
    </main>
  );
};

export default App;
