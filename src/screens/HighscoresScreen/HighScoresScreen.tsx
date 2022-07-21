import Button from "components/Button";
import GradientBackground from "components/GradientBackground";
import HighScoresTable from "components/HighScoresTable";
import Title from "components/textComponents/Title";
import useAbortEffect from "hooks/useAbortEffect";
import Highscore from "models/Highscore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getHighScores from "services/getHighScores";

const HighscoresScreen = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Highscore[]>([]);

  useAbortEffect(async () => {
    const response = await getHighScores();
    response.status === 200 && setData(response.data);
  });

  return (
    <GradientBackground>
      <Title text="High scores" />
      <HighScoresTable data={data} />
      <Button title="New Game" onClick={() => navigate("/")} />
    </GradientBackground>
  );
};

export default HighscoresScreen;
