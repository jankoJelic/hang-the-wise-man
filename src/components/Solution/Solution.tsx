import onlyLettersInString from "util/onlyLettersInString";

type Props = {
  solution: string;
  usedLetters: string[];
};

const Solution = ({ solution, usedLetters }: Props) => {
  return (
    <div className="w-full flex flex-wrap items-center px-8">
      {solution.split("").map((char) => {
        const isLetter = onlyLettersInString(char);
        const isUsed = usedLetters.includes(char.toUpperCase());
        const isQuotationMark = char === "'";

        return (
          <div
            className={`flex text-mainText font-semibold border-gray-600 mx-1 my-1 h-4 py-4
        justify-${isLetter ? "center" : "flex-end"}
        w-${isLetter ? "4" : "2"}
        border-b-${isLetter ? "2" : "0"}
        items-${isLetter ? "center" : isQuotationMark ? "start" : "end"}
        `}
          >
            <p>{!isLetter ? char : isUsed ? char : ""}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Solution;
