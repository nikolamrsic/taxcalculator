import React from "react";
import { useTable } from "../Context/TableContext";
import Arrow from "../Icons/Arrow";
export default function Option() {
  let [openDropDown, setOpenDropDown] = React.useState(false);
  const table = useTable();
  let [value, setValue] = React.useState(table.frequancy);
  const dropDownBtnRef = React.useRef();
  const dropDownRef = React.useRef();

  function getValue(e) {
    table.getChangeValue();
    table.getNewF(e.target.value);
  }
  function closeGlobalDropDown(e) {
    if (e.target != dropDownRef.current && e.target != dropDownBtnRef.current) {
      setOpenDropDown(false);
    }
  }

  React.useEffect(() => {
    setValue(table.frequancy);
  }, [table]);

  React.useEffect(() => {
    document.addEventListener("click", closeGlobalDropDown);
    return () => {
      document.removeEventListener("click", closeGlobalDropDown);
    };
  }, []);
  return (
    <div className="relative">
      <button
        type="button"
        ref={dropDownBtnRef}
        onClick={(e) => {
          setOpenDropDown(!openDropDown);
        }}
        value={value}
        className="py-3 w-[120px] flex items-center justify-center gap-2  text-center cursor-pointer focus:outline-sec bg-main border text-white border-inputBtn hover:bg-main/80 "
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
          }}
          value={"annually"}
        >
          Annually
        </button>
      </div>
    </div>
  );
}
