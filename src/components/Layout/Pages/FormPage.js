import React from "react";
import Box from "../Box";
import Text from "../../Typhografy/Text";
import InputOption from "../../Forms/InputOption";
import Button from "../../Buttons/Button";
import ClacIcon from "../../Icons/CalcIcon";
import graph from "../../../imgs/graph.png";
import { useTable } from "../../Context/TableContext";
import { useNavigate } from "react-router-dom";
export default function FormPage() {
  let [typeOfIncome, setTypeOfIncome] = React.useState("gross");
  let [timing, setTiming] = React.useState("monthly");
  let [radios, setRadios] = React.useState([
    { value: "gross", checked: true },
    { value: "neto", checked: false },
  ]);
  let [incomeValue, setIncomeValue] = React.useState(0);
  let tableContext = useTable();
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    tableContext.reset();
    tableContext.getValueOfIncome(parseInt(incomeValue));
    tableContext.getTypeOfIncome(typeOfIncome);
    tableContext.getFrequency(timing);

    navigate("/table");
  }
  return (
    <div className="w-full">
      <img
        className="absolute right-0  -z-1  lg:right-[-50px] bottom-0  hidden md:block"
        src={graph}
      ></img>
      <form
        onSubmit={handleSubmit}
        className="flex  relative z-50 flex-col gap-5 lg:w-8/12 w-full  md:w-11/12"
      >
        <Box className={"mb-8 flex gap-2  py-5 mb-5"}>
          <ClacIcon />
          <Text
            el="h1"
            text="Income tax calculator "
            className={"text-3xl text-[#8B8B8B] font-bold"}
          />
        </Box>
        <Box className={"flex flex-col gap-5 mb-5 "}>
          <Text
            el="h2"
            text="Please enter your total income:"
            className="text-xl text-black/60 "
          />
          <InputOption
            incomeValueHandler={(e) => {
              setIncomeValue(e.target.value);
            }}
            timingValueHandler={(e) => {
              setTiming(e.target.value);
            }}
          />
        </Box>

        <Box className={"flex flex-col gap-3"}>
          <Text
            el="h2"
            text="Your income type ?"
            className="text-xl text-black/60 mb-3"
          />
          <Box className="flex gap-7 mb-16">
            {radios.map((radio, index) => {
              return (
                <Button
                  key={index}
                  text={radio.value}
                  handler={(e) => {
                    setTypeOfIncome(radio.value);
                    setRadios((prev) => {
                      return prev.map((r, i) => {
                        if (i === index) {
                          r.checked = true;
                        } else {
                          r.checked = false;
                        }
                        return r;
                      });
                    });
                  }}
                  checkedSatus={radio.checked}
                />
              );
            })}
          </Box>
        </Box>
        <button
          type="submit"
          className="w-full bg-green-l py-3 border-2 active:border-sec bg-main hover:bg-sec transition-all text-white mt-"
        >
          Calculate
        </button>
      </form>
    </div>
  );
}
