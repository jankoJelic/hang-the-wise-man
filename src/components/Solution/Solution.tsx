import onlyLettersInString from "util/onlyLettersInString";

type Props = {
  solution: string;
  usedLetters: string[];
  // onGameWon: () => void;
};

const Solution = ({ solution, usedLetters }: Props) => {
  const gameWon = solution
    .split("")
    .every((char) => usedLetters.includes(char));
  console.log(gameWon);
  return (
    <div className="w-full flex flex-wrap items-center px-8">
      {solution.split("").map((char, index) => {
        const isLetter = onlyLettersInString(char);
        const isUsed = usedLetters.includes(char.toUpperCase());
        const isQuotationMark = char === "'";
        const isDash = char === "-";
        const isSpace = char === " ";

        return (
          <div
            key={char + index + "--"}
            className={`flex flex-col relative text-mainText font-semibold border-gray-600 mx-1 my-1 h-4 py-4
        justify-${isLetter ? "center" : "flex-end"}
        w-${isLetter || isSpace ? "8" : "2"}
        border-b-${isLetter ? "4" : "0"}
        items-${
          isLetter || isDash ? "center" : isQuotationMark ? "start" : "end"
        }`}
          >
            <p className={`${isQuotationMark ? "absolute top-1" : ""}`}>
              {!isLetter ? char : isUsed ? char : ""}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Solution;
