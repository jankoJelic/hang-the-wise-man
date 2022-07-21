import axios from "axios";

const getPuzzle = async () => {
  const response = await axios.get("http://api.quotable.io/random");

  return response;
};

export default getPuzzle;
