import { appContext } from "context";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const Game = () => {
  const { state } = useLocation();
  const appState = useContext(appContext);
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(Date.now());
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>{appState.playerName}</h1>
      <h2>Game</h2>
    </main>
  );
};

export default Game;
