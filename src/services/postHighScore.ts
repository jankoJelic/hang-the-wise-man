import axios from "axios";
import Puzzle from "models/Puzzle";
import store from "store/store";
import { HIGHSCORE_URL } from "../constants";

const postHighScore = async (
  puzzle: Puzzle,
  errors: number,
  duration: number,
  usedLetters: string[]
) => {
  const state = store.getState();
  const playerName = state.appState.playerName;

  const headers = {
    "Content-Type": "application/json",
  };

  const data = {
    quoteId: puzzle._id,
    length: puzzle.length,
    uniqueCharacters: usedLetters.length,
    userName: playerName,
    errors,
    duration,
  };

  axios.post(HIGHSCORE_URL, data, { headers });
};

export default postHighScore;
