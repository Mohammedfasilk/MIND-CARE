import React, { Children } from "react";

function Button({children,handleClick}) {
  return (
    <button
      onClick={handleClick}
      className="bg-[#17A39C] p-3 px-5 rounded text-white font-semibold shadow-md shadow-black/50 cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
