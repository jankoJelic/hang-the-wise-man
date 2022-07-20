import Button from "components/Button";
import Keyboard from "components/Keyboard/Keyboard";
import MainModal from "components/MainModal";
import Solution from "components/Solution";
import Title from "components/textComponents/Title";
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
  const [modalVisible, setModalVisible] = useState(false);

  const lastChance = numberOfMistakes === 6;
  const goToHomePage = () => navigate("/");

  useEffect(() => {
    if (!appState.playerName) {
      goToHomePage();
      return;
    }

    resetStartTime();
  }, []);

  const resetStartTime = () => setStartTime(Date.now());

  const handleLetterClick = (letter: string) => {
    if (!solution.toUpperCase().includes(letter)) {
      if (lastChance) {
        setModalVisible(true);
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
      <Button title="Restart game" styles="w-48 mt-12" onClick={restartGame} />
      <MainModal
        visible={modalVisible}
        onClickCancel={() => {
          setModalVisible(false);
          goToHomePage();
        }}
        title="You lost!"
        onClickButton={() => {
          setModalVisible(false);
          restartGame();
        }}
        description="New game?"
        showTwoButtons
        confirmButtonTitle="Yes, please"
      />
    </div>
  );
};

export default Game;
