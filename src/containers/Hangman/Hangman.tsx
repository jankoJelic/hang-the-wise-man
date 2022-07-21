import React from "react";

const Hangman = ({ mistakes = 0 }) => {
  const gameOver = mistakes === 7;
  const Gallows = () => (
    <div role="gallows">
      <div className="w-1 bg-mainText h-52" />
      <div className="h-1 bg-mainText absolute top-0 w-32" />
      <div className="w-1 h-4 bg-mainText absolute ml-32 top-0" />
    </div>
  );

  const SadFace = () => (
    <>
      <div role="face" className="text-center text-xs font-semibold mt-1">
        x x
      </div>
      <p className="text-center text-xs font-semibold rotate-90 -mt-2">(</p>
    </>
  );

  const Head = () => (
    <div
      role="head"
      className="w-8 h-8 rounded-full border-2 absolute ml-29 top-4 border-black"
    >
      {gameOver && <SadFace />}
    </div>
  );

  const Body = () => (
    <div role="abdomen" className="w-1 h-8 bg-mainText absolute ml-32 top-12" />
  );

  const LeftLeg = () => (
    <div
      role="leftLeg"
      className="w-1 h-8 bg-mainText absolute ml-30 top-19 rotate-45"
    />
  );

  const RightLeg = () => (
    <div
      role="rightLeg"
      className="w-1 h-8 bg-mainText absolute ml-34 top-19 rotate-135"
    />
  );

  const LeftHand = () => (
    <div
      role="leftHand"
      className="w-1 h-8 bg-mainText absolute ml-30 top-12 rotate-90"
    />
  );

  const RightHand = () => (
    <div
      role="rightHand"
      className="w-1 h-8 bg-mainText absolute ml-36 top-12 rotate-90"
    />
  );

  const bodyParts = [
    <Head key="head" />,
    <Body key="body" />,
    <LeftLeg key="leftLeg" />,
    <RightLeg key="rightLeg" />,
    <LeftHand key="leftHand" />,
    <RightHand key="rightHand" />,
  ];

  return (
    <div
      role="container"
      className="border-b-4 w-72 border-mainText h-52 relative pl-6 mb-8"
    >
      <Gallows />
      {bodyParts.filter((_bodyPart, index) => index < mistakes)}
    </div>
  );
};

export default React.memo(Hangman);
