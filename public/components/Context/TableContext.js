import react from "react";
import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import CalculateIncome from "./ClaculateIncome";
const TableContext = createContext();

export default function TableContextProvider({ children }) {
  let [typeOfIncome, setTypeOfIncome] = React.useState();
  let [valueOfIncome, setValueOfIncome] = React.useState();
  let [frequancy, setFrequancy] = React.useState();
  let [table, setTable] = React.useState();
  let [calcValue, setCalcValue] = React.useState();
  let [changeValue, setChangeValue] = React.useState(false);
  useEffect(() => {
    setTable(CalculateIncome(valueOfIncome, frequancy, typeOfIncome));
  }, [typeOfIncome, valueOfIncome, frequancy]);

  return (
    <TableContext.Provider
      value={{
        table,
        valueOfIncome,
        frequancy,
        changeValue,
        calcValue,
        reset: function () {
          setCalcValue(undefined);
          setChangeValue(false);
        },
        getNewF: function (f) {
          setCalcValue(() => {
            return Object.entries(table).find((item) => {
              return item[0] === f;
            })[1][typeOfIncome === "gross" ? "neto" : "gross"];
          });
        },
        getChangeValue: function () {
          setChangeValue(true);
        },
        getCalculatedValue: function getCalculatedValue(f = frequancy) {
          return Object.entries(table).find((item) => {
            return item[0] === f;
          })[1][typeOfIncome === "gross" ? "neto" : "gross"];
        },
        getValueOfIncome: function (newValueOfIncome) {
          setValueOfIncome(newValueOfIncome);
        },
        getTypeOfIncome: function (newTypeOfIncome) {
          setTypeOfIncome(newTypeOfIncome);
        },
        getFrequency: function (newFrequency) {
          setFrequancy(newFrequency);
        },
        inputs: { typeOfIncome, valueOfIncome, frequancy },
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

export function useTable() {
  return useContext(TableContext);
}
