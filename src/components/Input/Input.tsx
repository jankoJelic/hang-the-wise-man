import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  return (
    <input
      className="shadow appearance-none border border-mainAction rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline my-4"
      type="text"
      name="name"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
