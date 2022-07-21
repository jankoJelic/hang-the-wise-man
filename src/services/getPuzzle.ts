import axios from "axios";
import { PUZZLE_URL } from "../constants";

const getPuzzle = async () => {
  const response = await axios.get(PUZZLE_URL);

  return response;
};

export default getPuzzle;
