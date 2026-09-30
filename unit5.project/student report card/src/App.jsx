import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReportProvider, Admin, Students, About } from "./project";
import "./project.css";

function App() {
  return (
    <BrowserRouter basename="/student-report-card">
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