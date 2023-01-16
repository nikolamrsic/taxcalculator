import React from "react";
import { useEffect } from "react";
import Button from "./Buttons/Button";
import Text from "./Typhografy/Text";
import InputOption from "./Forms/InputOption";
import Box from "./Layout/Box";
import ClacIcon from "./Icons/CalcIcon";
import MainLayout from "./Layout/MainLayout";
import FormPage from "./Layout/Pages/FormPage";
import { Routes, Route } from "react-router-dom";
import TaxTable from "./Layout/Pages/TaxTable";

export default function App() {
  return (
    <div className="w-full h-screen  bg-[#D0E7E5] flex items-center justify-center rounded">
      <MainLayout>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/table" element={<TaxTable />} />
        </Routes>
      </MainLayout>
    </div>
  );
}
