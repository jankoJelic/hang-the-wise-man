import React from "react";

const Hangman = ({ mistakes = 0 }) => {
  const Gallows = () => (
    <>
      <div className="w-1 bg-mainText h-52" />
      <div className="h-1 bg-mainText absolute top-0 w-32" />
      <div className="w-1 h-4 bg-mainText absolute ml-32 top-0" />
    </>
  );

  const Head = () => (
    <div className="w-8 h-8 rounded-full border-2 absolute ml-29 top-4 border-black" />
  );

  const Body = () => (
    <div className="w-1 h-8 bg-mainText absolute ml-32 top-12" />
  );

  const LeftLeg = () => (
    <div className="w-1 h-8 bg-mainText absolute ml-30 top-19 rotate-45" />
  );

  const RightLeg = () => (
    <div className="w-1 h-8 bg-mainText absolute ml-34 top-19 rotate-135" />
  );

  const LeftHand = () => (
    <div className="w-1 h-8 bg-mainText absolute ml-30 top-12 rotate-90" />
  );

  const RightHand = () => (
    <div className="w-1 h-8 bg-mainText absolute ml-36 top-12 rotate-90" />
  );

  const bodyParts = [
    <Head />,
    <Body />,
    <LeftLeg />,
    <RightLeg />,
    <LeftHand />,
    <RightHand />,
  ];

  return (
    <div className="border-b-4 w-72 sm:w-96 border-mainText h-52 relative pl-6 mb-8">
      <Gallows />
      {bodyParts.filter((_bodyPart, index) => index < mistakes)}
    </div>
  );
};

export default React.memo(Hangman);
