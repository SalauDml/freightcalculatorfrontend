import React from "react";
import { CgProfile } from "react-icons/cg";

function Button({ text }) {
  return (
    <>
      <div className="flex items-center gap-1 p-2 bg-blue-600 rounded-sm ">
        <CgProfile className="text-white"/>
        <div>{text}</div>
      </div>
    </>
  );
}

export default Button;
