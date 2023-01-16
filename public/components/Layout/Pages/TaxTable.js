import React from "react";
import Text from "../../Typhografy/Text";
import { useTable } from "../../Context/TableContext";
import { useEffect } from "react";
import ErorData from "../../Eror/ErorData";
import Option from "../../Option/Option";
import Table from "../../Icons/Table";
export default function TaxTable() {
  let table = useTable();

  return (
    <div>
      {table.valueOfIncome ? (
        <div>
          <div className="mb-16 flex md:flex-row flex-col items-center px-3 py-4  border-l border-l-4 border-l-sec bg-main/5  ">
            <span
              onClick={() => console.log(table)}
              className="text-white bg-main text-3xl border p-5 rounded-lg"
            >
              $
              {table.changeValue === false
                ? table?.getCalculatedValue()
                : table?.calcValue}
            </span>
            <div className="p-4 text-md text-black/80  w-full rounded-tr-md rounded-br-md">
              <p className="w-fit underline underline-offset-4">
                {" "}
                is your inccome for{" "}
                {table.inputs.typeOfIncome === "gross" ? "neto" : "gross"}
              </p>
            </div>
            <Option />
          </div>
          <div className="text-xl text-main/50 gap-5 p-2 mb-5 flex border-l-2 border-l-sec">
            <Table /> Your table of income:
          </div>
          <div className="rounded">
            <div className="flex divider-x border-b  bg-sec ">
              <div className=" px-3 py-5 flex-1 text-md text-black/50  text-center font-bold">
                Frequency
              </div>
              <div className=" px-3 py-5 flex-1 text-md text-black/50  text-center font-bold">
                Gross Income
              </div>
              <div className=" px-3 py-5 flex-1 text-md text-black/50  text-center font-bold">
                Tax
              </div>
              <div className=" px-3 py-5 flex-1 text-md text-black/50  text-center font-bold">
                Net Income
              </div>
            </div>

            {table.table &&
              Object.entries(table.table).map((row, index) => {
                return (
                  <div
                    key={index}
                    className="flex divider-x border-b border-main/30 hover:scale-105 divide-x border-x border-x-main/30  divide-main/30 transition-all  hover:bg-sec/50 cursor-default"
                  >
                    <div className="p-3 flex-1 text-md text-black/80  text-center">
                      {row[0]}
                    </div>
                    <div className="p-3 flex-1 text-md text-black/80  text-center">
                      {row[1].gross}
                    </div>
                    <div className="p-3 flex-1 text-md text-black/80  text-center">
                      {row[1].tax}
                    </div>
                    <div className="p-3 flex-1  text-md text-black/80  text-center">
                      {row[1].neto}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <ErorData />
      )}
    </div>
  );
}
