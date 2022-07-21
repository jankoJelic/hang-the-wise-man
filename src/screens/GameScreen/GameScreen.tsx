import Button from "components/Button";
import Keyboard from "components/Keyboard/Keyboard";
import MainModal from "components/MainModal";
import Solution from "components/Solution";
import Title from "components/textComponents/Title";
import Hangman from "containers/Hangman";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getPuzzle from "services/getPuzzle";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import Puzzle from "models/Puzzle";
import { useDispatch } from "react-redux";
import { setIsLoading } from "store/appSlice";
import postHighScore from "services/postHighScore";

const GameScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const appState = useSelector((state: RootState) => state.appState);
  const { data } = location.state as { data: Puzzle };

  const [solution, setSolution] = useState(data.content);
  const [startTime, setStartTime] = useState(Date.now());
  const [usedLetters, setUsedLetters] = useState<string[]>([]);
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(data);
  const parsedSolution = solution.toUpperCase().replace(/[^A-Z]+/g, "");
  const lastChance = numberOfMistakes === 6;
  const goToHomePage = () => navigate("/");
  const gameWon =
    !!usedLetters.length &&
    parsedSolution.split("").every((l) => usedLetters.includes(l));

  useEffect(() => {
    if (!appState.playerName) {
      goToHomePage();
      return;
    }

    resetStartTime();
  }, []);

  useEffect(() => {
    if (gameWon) {
      const duration = Date.now() - startTime;
      postHighScore(data, numberOfMistakes, duration, usedLetters);
      navigate("/highscores");
    }
  }, [gameWon]);

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
    dispatch(setIsLoading(true));
    const response = await getPuzzle();

    if (response.status === 200) {
      setSolution(response.data.content);
      setUsedLetters([]);
      setNumberOfMistakes(0);
      resetStartTime();
    }
    dispatch(setIsLoading(false));
  };

  const handleCancelButtonClick = () => {
    setModalVisible(false);
    goToHomePage();
  };

  const handleConfirmButtonClick = () => {
    setModalVisible(false);
    restartGame();
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
        onClickCancel={handleCancelButtonClick}
        title="You lost!"
        onClickButton={handleConfirmButtonClick}
        description="New game?"
        showTwoButtons
        confirmButtonTitle="Yes, please"
      />
    </div>
  );
};

export default GameScreen;
