import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Project from "./project";
function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Nivedha</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/*" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;