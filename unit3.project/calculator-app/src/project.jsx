import React, { useState } from "react";
import "./project.css";

function Project() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {
    const a = Number(num1);
    const b = Number(num2);

    const answer =
      operator === "+"
        ? a + b
        : operator === "-"
        ? a - b
        : operator === "*"
        ? a * b
        : operator === "/"
        ? b !== 0
          ? a / b
          : "Cannot divide by zero"
        : a % b;

    setResult(answer);
  };

  const reset = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div className="page">

      <h1>Simple Calculator</h1>

      <div className="calculator">

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <div className="operations">

          <button onClick={() => calculate("+")}>
            +
          </button>

          <button onClick={() => calculate("-")}>
            −
          </button>

          <button onClick={() => calculate("*")}>
            ×
          </button>

          <button onClick={() => calculate("/")}>
            ÷
          </button>

          <button onClick={() => calculate("%")}>
            %
          </button>

        </div>

        <div className="result">
          {result}
        </div>

        <button className="reset" onClick={reset}>
          Reset
        </button>

      </div>
    </div>
  );
}

export default Project;
