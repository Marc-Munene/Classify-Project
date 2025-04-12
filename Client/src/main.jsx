import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalLayout } from "./Pages/protected/GlobalLayout";
import { Classes } from "./Pages/protected/Classes";
import { Bookings } from "./Pages/protected/Bookings";
import { Booked } from "./Pages/protected/Booked";
import { History } from "./Pages/protected/History";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<App />}>
            <Route index element={<Classes />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="booked" element={<Booked />} />
            <Route path="history" element={<History />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
