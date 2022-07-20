import CONSTANTS from "constants";
import React from "react";

const Keyboard = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const Letter = ({ letter }: { letter: string }) => (
    <div
      className="flex w-8 aspect-square rounded-lg m-4 
      cursor-pointer bg-mainExtraLight items-center justify-center"
    >
      {letter}
    </div>
  );

  return (
    <div className="flex flex-wrap p-4 mx-4 mt-8">
      {alphabet.split("").map((letter) => (
        <Letter letter={letter} />
      ))}
    </div>
  );
};

export default Keyboard;
