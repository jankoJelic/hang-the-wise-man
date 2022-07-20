import CONSTANTS from "constants";
import React from "react";

const Keyboard = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    <div className="flex flex-wrap p-4 mx-4">
      {alphabet.split("").map((letter) => (
        <div className="flex w-8 aspect-square rounded-lg m-4 cursor-pointer bg-mainExtraLight items-center justify-center">
          {letter}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
