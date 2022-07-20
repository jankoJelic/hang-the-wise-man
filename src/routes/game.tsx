import Title from "components/Title";
import Hangman from "containers/Hangman";
import { appContext } from "context";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Puzzle = {
  author: string;
  content: string;
  length: number;
};

const Game = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const appState = useContext(appContext);

  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(Date.now());
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);

  const { data } = location.state as { data: Puzzle };

  useEffect(() => {
    !appState.playerName && navigate("/");
  }, []);

  return (
    <div className="flex flex-col items-center pt-10">
      <Title text={`Good luck, ${appState.playerName}!`} />
      <Hangman />
      <h2 className="font-semibold mt-4">A wise man once said:</h2>
    </div>
  );
};

export default Game;
