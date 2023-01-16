import React from "react";
import Arrow from "../Icons/Arrow";
export default function InputOption({
  incomeValueHandler,
  timingValueHandler,
}) {
  let [value, setValue] = React.useState("monthly");
  let [openDropDown, setOpenDropDown] = React.useState(false);

  function getValue(e) {
    setValue(e.target.value);
  }

  let dropDownRef = React.useRef();
  let dropDownBtnRef = React.useRef();
  function closeGlobalDropDown(e) {
    if (e.target != dropDownRef.current && e.target != dropDownBtnRef.current) {
      setOpenDropDown(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener("click", closeGlobalDropDown);
    return () => {
      document.removeEventListener("click", closeGlobalDropDown);
    };
  }, []);
  return (
    <div className="flex items-center">
      <input
        type={"text"}
        onInput={(e) => {
          incomeValueHandler(e);
        }}
        pattern="[0-9]+"
        required
        className="py-3 px-3 border flex-1 bg-slate-100   focus:outline-none focus:border-b-main"
        placeholder="Enter Your Slary"
      />
      <div className="relative">
        <button
          type="button"
          ref={dropDownBtnRef}
          onClick={(e) => {
            setOpenDropDown(!openDropDown);
          }}
          value={value}
          className="py-3 w-[120px] text-center flex items-center justify-center cursor-pointer focus:outline-sec bg-main border text-white border-inputBtn hover:bg-main/80 "
        >
          {value}
          <Arrow />
        </button>
        <div
          ref={dropDownRef}
          style={{ display: openDropDown ? "flex" : "none" }}
          className="absolute top-full flex flex-col gap-2 w-full p-2 bg-white border drop-shadow"
        >
          <button
            type="button"
            className="p-1 hover:bg-main hover:text-white rounded"
            onClick={(e) => {
              getValue(e);
              timingValueHandler(e);
            }}
            value={"weekly"}
          >
            Weakly
          </button>

          <button
            type="button"
            className="p-1 hover:bg-main  hover:text-white rounded"
            onClick={(e) => {
              getValue(e);
              timingValueHandler(e);
            }}
            value={"monthly"}
          >
            Monthly
          </button>
          <button
            type="button"
            className="p-1 hover:bg-main  hover:text-white rounded"
            onClick={(e) => {
              getValue(e);
              timingValueHandler(e);
            }}
            value={"annually"}
          >
            Annually
          </button>
        </div>
      </div>
    </div>
  );
}
