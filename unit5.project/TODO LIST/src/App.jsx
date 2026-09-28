import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  TodoProvider,
  Home,
  TodoPage,
  About
} from "./project.jsx";
import "./Project.css";

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TodoPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;