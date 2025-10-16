import React from "react";

function Step2formcomponent({ Icon, placeholder, label }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
        <Icon size={20} />
        <label className="font-bold" htmlFor="">
          {label}
        </label>
      </div>
      <input
        className="border-2 border-gray-400 p-4 rounded-lg  focus:border-blue-800 focus:outline-none"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Step2formcomponent;
