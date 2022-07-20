import { Outlet, Link } from "react-router-dom";
import useDimensions from "./hooks/useDimensions";
import LandingScreen from "./screens/LandingScreen";

const App = () => {
  const { width, height } = useDimensions();

  return (
    <main
      style={{ minWidth: width, minHeight: height }}
      className="flex flex-col items-center pt-10 bg-gradient-to-br from-white to-mainExtraLight"
    >
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
