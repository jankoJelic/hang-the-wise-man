import { ALPHABET } from "../../constants";

type Props = {
  onClickLetter: (letter: string) => void;
  usedLetters: string[];
};

const Keyboard: React.FC<Props> = ({ onClickLetter, usedLetters }) => {
  const Letter = ({ letter }: { letter: string }) => {
    const letterIsUsed = usedLetters.includes(letter);

    return (
      <div
        role="letter"
        className={`flex w-8 aspect-square rounded-lg m-2 
      cursor-pointer items-center justify-center
      ${letterIsUsed ? "bg-transparent" : "bg-mainExtraLight"}
      ${letterIsUsed ? "" : "shadow-sm"}`}
        onClick={() => onClickLetter(letter)}
      >
        {letter}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap p-4 mx-4 mt-8 md:px-16">
      {ALPHABET.split("").map((letter) => (
        <Letter letter={letter} key={letter + "_"} />
      ))}
    </div>
  );
};

export default Keyboard;
