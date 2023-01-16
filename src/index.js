import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import styles from "./index.css";
import { BrowserRouter } from "react-router-dom";
import TableContextProvider from "./components/Context/TableContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TableContextProvider>
      <App />
    </TableContextProvider>
  </BrowserRouter>
);
