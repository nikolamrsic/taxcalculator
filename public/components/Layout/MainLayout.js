import React from "react";
import Box from "./Box";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTable } from "../Context/TableContext";
import { useNavigate } from "react-router-dom";
import Table from "../Icons/Table";
export default function MainLayout({ children }) {
  const table = useTable();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  max-w-5xl w-11/12   ">
      <Box className="flex">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "py-3 px-6  bg-main rounded-tl-md text-white transition-all"
              : "py-3 px-6  bg-sec/20 rounded-tl-md text-black/80 transition-all hover:bg-main/80 hover:text-white/50"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/table"
          onClick={(e) => {
            e.preventDefault();
            if (table.valueOfIncome) {
              navigate("/table");
            }
          }}
          className={({ isActive }) =>
            isActive
              ? "py-3 px-6  bg-main rounded-tr-md text-white transition-all"
              : "py-3 px-6  bg-sec/20 rounded-tr-md text-black/80 transition-all hover:bg-main/80 hover:text-white/50 flex"
          }
        >
          Table
        </NavLink>
      </Box>
      <div className="flex flex-col gap-5 border  border-sec/40 bg-[#D0E7E5]  h-fit relative h-fit min-h-[720px] pt-[50px] overflow-visible pl-12 pr-[80px] pb-[155px]">
        {children}
      </div>
    </div>
  );
}
