import React from "react";

function Button({ title = "" }) {
  return (
    <button className="bg-mainAction text-white w-full h-10 rounded-xl hover:bg-mainLight mb-2">
      {title}
    </button>
  );
}

export default Button;
