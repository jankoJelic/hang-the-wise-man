import useDimensions from "hooks/useDimensions";
import LandingScreen from "screens/LandingScreen";

const App = () => {
  const { width, height } = useDimensions();

  return (
    <main
      style={{ minWidth: width, minHeight: height }}
      className="flex flex-col items-center pt-10 bg-gradient-to-br from-white to-mainExtraLight"
    >
      <LandingScreen />
    </main>
  );
};

export default App;
