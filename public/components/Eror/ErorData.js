import React from "react";
import eror from "../../imgs/eror.svg";
export default function ErorData() {
  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
      <div>
        <h2 className="text-2xl text-center mg-8 text-black/50">
          <span
            className="font-bold clas
          text-main"
          >
            Woops.
          </span>{" "}
          Please enter some data.
        </h2>
        <img src={eror} className="mt-8 mx-auto"></img>
      </div>
    </div>
  );
}
