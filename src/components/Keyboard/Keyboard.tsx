type Props = {
  onClickLetter: (letter: string) => void;
  usedLetters: string[];
};

const Keyboard: React.FC<Props> = ({ onClickLetter, usedLetters }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const letterIsUsed = (letter: string) => usedLetters.includes(letter);

  const Letter = ({ letter }: { letter: string }) => (
    <div
      className={`flex w-8 aspect-square rounded-lg m-2 
      cursor-pointer items-center justify-center
      bg-${letterIsUsed(letter) ? "gray-300" : "mainExtraLight"}`}
      onClick={() => onClickLetter(letter)}
    >
      {letter}
    </div>
  );

  return (
    <div className="flex flex-wrap p-4 mx-4 mt-8">
      {alphabet.split("").map((letter) => (
        <Letter letter={letter} key={letter + "_"} />
      ))}
    </div>
  );
};

export default Keyboard;
