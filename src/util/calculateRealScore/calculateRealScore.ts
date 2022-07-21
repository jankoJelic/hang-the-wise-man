type Score = {
  quoteLength: number;
  uniqueLetters: number;
  errors: number;
  solvingTime: number;
};

const calculateRealScore = ({
  quoteLength,
  uniqueLetters,
  errors,
  solvingTime,
}: Score) => {
  const result =
    100 / (1 + errors) + uniqueLetters / 1000 + quoteLength / 100000;

  const isHacked = solvingTime < 2000;

  return isHacked ? result : result + 0.1 / solvingTime;
};

export default calculateRealScore;
