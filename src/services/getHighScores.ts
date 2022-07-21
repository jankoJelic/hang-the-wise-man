import axios from "axios";
import { HIGHSCORE_URL } from "../constants";

const getHighScores = async () => {
  const response = await axios.get(HIGHSCORE_URL);

  console.log(response);
};

export default getHighScores;
