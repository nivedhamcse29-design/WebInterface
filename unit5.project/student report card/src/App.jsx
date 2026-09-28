import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ReportProvider,
  Admin,
  Students,
  About
} from "./Project";
import "./Project.css";
function App() {
  return (
    <BrowserRouter>
      <ReportProvider>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ReportProvider>
    </BrowserRouter>
  );
}
export default App;