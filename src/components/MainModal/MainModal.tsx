import Button from "components/Button";
import Subtitle from "components/textComponents/Subtitle";
import { useState } from "react";

type Props = {
  visible: boolean;
  title: string;
};

const MainModal = ({ visible, title }: Props) => {
  const [isVisible, setIsVisible] = useState(visible);

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div
      className="flex fixed inset-0 left-0 w-screen h-screen
     bg-mainText bg-opacity-60 items-center justify-center"
    >
      <div className="flex flex-col w-72 sm:w-96 p-4 h-54 sm:h-72 bg-white rounded-xl items-center relative">
        <Subtitle text={title} />
        <Button
          onClick={handleButtonClick}
          className="absolute bottom-10 w-34"
          title="OK"
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MainModal;
