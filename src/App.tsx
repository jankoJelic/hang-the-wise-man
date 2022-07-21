import GradientBackground from "components/GradientBackground";
import useDimensions from "hooks/useDimensions";
import LandingScreen from "screens/LandingScreen";

const App = () => {
  const { width, height } = useDimensions();

  return (
    <GradientBackground>
      <LandingScreen />
    </GradientBackground>
  );
};

export default App;
