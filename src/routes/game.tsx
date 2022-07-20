import Button from "components/Button";
import Keyboard from "components/Keyboard/Keyboard";
import Solution from "components/Solution";
import Title from "components/Title";
import Hangman from "containers/Hangman";
import { appContext } from "context";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getPuzzle from "services/getPuzzle";

type Puzzle = {
  author: string;
  content: string;
  length: number;
};

const Game = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const appState = useContext(appContext);
  const { data } = location.state as { data: Puzzle };

  const [solution, setSolution] = useState(data.content);
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(Date.now());
  const [usedLetters, setUsedLetters] = useState<string[]>([]);
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);

  const lastChance = numberOfMistakes === 6;

  useEffect(() => {
    if (!appState.playerName) {
      navigate("/");
      return;
    }

    resetStartTime();
  }, []);

  const resetStartTime = () => setStartTime(Date.now());

  const handleLetterClick = (letter: string) => {
    if (!solution.toUpperCase().includes(letter)) {
      if (lastChance) {
        appState.setAppState({
          ...appState,
          modal: {
            visible: true,
            title: "Game over!",
            buttonTitle: "New game",
          },
        });
      }
      setNumberOfMistakes((prevState) => prevState + 1);
    }

    setUsedLetters((prevState) => prevState.concat([letter]));
  };

  const restartGame = async () => {
    const response = await getPuzzle();

    if (!!response) {
      setSolution(response.content);
      setUsedLetters([]);
      setNumberOfMistakes(0);
    }
  };

  return (
    <div className="flex flex-col items-center pt-10">
      <Title text={`Good luck, ${appState.playerName}!`} />
      <Hangman mistakes={numberOfMistakes} />
      <h2 className="font-semibold my-4">{`A wise man once said: ${
        lastChance ? "(hint: it was " + data.author + ")" : ""
      }`}</h2>
      <Solution solution={solution} usedLetters={usedLetters} />
      <Keyboard onClickLetter={handleLetterClick} usedLetters={usedLetters} />
      <Button
        title="Restart game"
        className="w-48 mt-12"
        onClick={restartGame}
      />
    </div>
  );
};

export default Game;
