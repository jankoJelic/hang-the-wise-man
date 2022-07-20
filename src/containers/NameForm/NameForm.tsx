import { useState } from "react";
import Button from "../../components/Button";

const NameForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  return (
    <form
      className="flex flex-col p-8 border-solid border mt-10 
    rounded-xl bg-white items-center w-72 sm:w-96 shadow-md"
    >
      <h3>Tell us your name!</h3>
      <input
        className="border border-mainAction 
      rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight my-4
      focus:outline-none focus:bg-gray-100 focus:border-mainLight"
        type="text"
        name="name"
        value={value}
        onChange={handleChange}
      />
      <Button title="Enter" />
    </form>
  );
};

export default NameForm;
