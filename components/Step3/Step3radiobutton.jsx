import React from "react";

function Step3radiobutton({label,text,radio,value,onSelect,setCostData}) {
  const selected = radio === value;

  const handleClick = () => {
    setCostData((prev) => ({
      ...prev,radio:radio
    }))
    onSelect?.();
  }
  return (
    <div onClick={handleClick} className={`${selected && "border-2 border-blue-800"} flex bg-white rounded-sm gap-4 p-4` }>
      <input  type="radio" name="data" value={value} checked={selected} readOnly />
      <div className="inline">
        <label className="font-bold" htmlFor="">{label}</label>
        <p className="text-[12px] font-light text-gray-500 mt-2">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Step3radiobutton;
