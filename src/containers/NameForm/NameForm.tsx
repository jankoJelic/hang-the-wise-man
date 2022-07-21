import React, { useState } from "react";
// import { appContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
import Button from "components/Button";
import getPuzzle from "services/getPuzzle";
import Subtitle from "components/textComponents/Subtitle/Subtitle";
import MainModal from "components/MainModal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store";
import { setPlayerName } from "store/appSlice";

const NameForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appState = useSelector((state: RootState) => state.appState);
  // const appState = useContext(appContext);

  const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const parseNameInput = (input: string) => input.replace(/[^a-z]/gi, "");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(parseNameInput(e.currentTarget.value));

  const handleKeyDown = (event: React.KeyboardEvent) =>
    event.key === "Enter" && onSubmitName();

  const onSubmitName = async () => {
    if (!value) {
      setModalVisible(true);
      return;
    }

    const response = await getPuzzle();

    if (!!response) {
      dispatch(setPlayerName(value));
      navigate("/game", { state: { data: response } });
    }
  };

  return (
    <div
      className="flex flex-col p-8 border-solid border mt-10 
    rounded-xl bg-white items-center w-72 sm:w-96 shadow-md"
    >
      <Subtitle text="Tell us your name!" />
      <input
        className="border border-mainAction 
      rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight my-4
      focus:outline-none focus:bg-gray-100 focus:border-mainLight"
        type="text"
        name="name"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button title="Enter" onClick={onSubmitName} />
      <MainModal
        visible={modalVisible}
        title="Please enter your name"
        onClickButton={() => setModalVisible(false)}
      />
    </div>
  );
};

export default NameForm;
