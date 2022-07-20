import Hangman from "containers/Hangman";
import { appContext } from "context";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

type Puzzle = {
  author: string;
  content: string;
  length: number;
};

const Game = () => {
  const location = useLocation();
  const appState = useContext(appContext);

  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(Date.now());
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);

  const { data } = location.state as { data: Puzzle };

  return (
    <div className="flex flex-col items-center pt-10">
      <Hangman />
      <h2 className="font-semibold mt-4">A wise man once said:</h2>
      <h1>{appState.playerName}</h1>
      <h2>Game</h2>
    </div>
  );
};

export default Game;
