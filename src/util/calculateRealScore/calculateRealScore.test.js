import calculateRealScore from "./calculateRealScore";

const bestScore = {
  quoteLength: 57,
  uniqueLetters: 17,
  errors: 13,
  solvingTime: 63513,
};

const secondBestScore = {
  quoteLength: 57,
  uniqueLetters: 17,
  errors: 13,
  solvingTime: 70000,
};

const thirdBestScore = {
  quoteLength: 58,
  uniqueLetters: 80,
  errors: 18,
  solvingTime: 30000,
};

const fourthBestScore = {
  quoteLength: 59,
  uniqueLetters: 78,
  errors: 18,
  solvingTime: 50000,
};

const fifthBestScore = {
  quoteLength: 58,
  uniqueLetters: 78,
  errors: 18,
  solvingTime: 10000,
};

const scores = [
  bestScore,
  secondBestScore,
  thirdBestScore,
  fourthBestScore,
  fifthBestScore,
];
const scoresWithRealScore = scores.map((s) => {
  return { ...s, realScore: calculateRealScore(s) };
});

const scoresByRealScore = scoresWithRealScore.sort(
  (a, b) => b.realScore < a.realScore
);

test("score is higher when number of errors is the smallest", () => {
  expect(scoresByRealScore[0]).toEqual({
    ...bestScore,
    realScore: calculateRealScore(bestScore),
  });

  scoresByRealScore.forEach((s, i) => {
    i !== 0 &&
      expect(scoresByRealScore[0].realScore).toBeGreaterThan(s.realScore);
  });
});

test("The lowest score will be the one with the biggest number of errors", () => {
  expect(scoresByRealScore[scoresByRealScore.length - 1]).toEqual({
    ...fifthBestScore,
    realScore: calculateRealScore(fifthBestScore),
  });
});

test("bestScore is higher than secondBestScore because its solving time is shorter", () => {
  expect(calculateRealScore(bestScore)).toBeGreaterThan(
    calculateRealScore(secondBestScore)
  );
});

test("secondBestScore is greater than thirdBestScore because it has less errors", () => {
  expect(calculateRealScore(secondBestScore)).toBeGreaterThan(
    calculateRealScore(thirdBestScore)
  );
});

test("thirdBestScore is greater than fourthBestScore because its unique letter count is higher", () => {
  expect(calculateRealScore(thirdBestScore)).toBeGreaterThan(
    calculateRealScore(fourthBestScore)
  );
});

test("fourthBestScore is greater than fifthBestScore because its number of unique characters is bigger", () => {
  expect(calculateRealScore(fourthBestScore)).toBeGreaterThan(
    calculateRealScore(fifthBestScore)
  );
});
