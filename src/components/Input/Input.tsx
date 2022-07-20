import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  return (
    <input
      className="border border-mainAction 
      rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight my-4
      focus:outline-none focus:bg-gray-100 focus:border-mainLight"
      type="text"
      name="name"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
