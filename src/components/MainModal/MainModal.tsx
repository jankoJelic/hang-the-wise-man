import Button from "components/Button";
import Subtitle from "components/textComponents/Subtitle";
import Title from "components/textComponents/Title";

type Props = {
  visible: boolean;
  title: string;
  onClickButton: () => void;
  description?: string;
  showTwoButtons?: boolean;
  confirmButtonTitle?: string;
  onClickCancel?: () => void;
};

const MainModal = ({
  visible,
  title,
  onClickButton,
  description,
  showTwoButtons = false,
  confirmButtonTitle = "OK",
  onClickCancel,
}: Props) => {
  return visible ? (
    <div
      className="flex fixed inset-0 left-0 w-screen h-screen
     bg-mainText bg-opacity-60 items-center justify-center"
    >
      <div className="flex flex-col w-72 sm:w-96 p-4 h-54 sm:h-72 bg-white rounded-xl items-center relative">
        <Title text={title} />
        {description && <Subtitle text={description} />}
        <Button
          onClick={onClickButton}
          styles="bottom-10 w-34"
          title={confirmButtonTitle}
        />
        {showTwoButtons && (
          <Button
            onClick={onClickCancel}
            styles="absolute bottom-10 w-34 bg-gray-600"
            title="Cancel"
          />
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MainModal;
