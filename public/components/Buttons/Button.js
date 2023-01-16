import React from "react";

export default function Button({ text, handler, checkedSatus, value }) {
  return (
    <label className="w-full border">
      <input
        type={"radio"}
        name="radio"
        onChange={handler}
        value={value}
        className="hidden"
        checked={checkedSatus}
      ></input>
      <div className="radioBtn py-3 px-2 text-center flex justify-center   text-black/80    hover:cursor-pointer transition-all   flex gap-2 border border-sec ">
        {text}
      </div>
    </label>
  );
}
