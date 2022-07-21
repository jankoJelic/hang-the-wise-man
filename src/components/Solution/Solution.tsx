import onlyLettersInString from "util/onlyLettersInString";

type Props = {
  solution: string;
  usedLetters: string[];
  // onGameWon: () => void;
};

const Solution = ({ solution, usedLetters }: Props) => {
  const gameWon = usedLetters.every((l) => solution.includes(l));
  console.log(gameWon);

  const renderLetters = () => {
    return solution.split(" ").map((word, index) => {
      return (
        <span className="flex flex-row mr-8">
          {word.split("").map((char) => {
            const isLetter = onlyLettersInString(char);
            const isUsed = usedLetters.includes(char.toUpperCase());
            const isQuotationMark = char === "'";
            // const isDash = char === "-";
            const isSpace = char === " ";

            return (
              <span
                key={char + index + "--"}
                className={`flex flex-col relative text-mainText font-semibold border-gray-600 mx-1 my-1 h-4 py-4
                  justify-${isLetter ? "center" : "flex-end"}
                  w-${isLetter || isSpace ? "8" : "2"}
                  border-b-${isLetter ? "4" : "0"}
                  items-${
                    isLetter ? "center" : isQuotationMark ? "start" : "end"
                  }`}
              >
                <p className={`${isQuotationMark ? "absolute top-1" : ""}`}>
                  {!isLetter ? char : isUsed ? char : ""}
                </p>
              </span>
            );
          })}
        </span>
      );
    });
  };

  return (
    <div className="w-full flex flex-wrap items-center px-8">
      {renderLetters()}
    </div>
  );
};

export default Solution;
