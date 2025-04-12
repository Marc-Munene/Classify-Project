import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalLayout } from "./Pages/protected/GlobalLayout";
import { Classes } from "./Pages/protected/Classes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<App />}>
            <Route path="classes" element={<Classes />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
