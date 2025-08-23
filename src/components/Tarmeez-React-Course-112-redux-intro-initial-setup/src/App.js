import "./App.css";

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { sum, sub, mul, div } from "./app/features/calc/calcSlice";

function App() {
  const x = useSelector((state) => {
    return state.calc.result;
  });

  const dispatch = useDispatch();

  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);
  const [result, setResult] = useState(null);

  // EVENT HANDLERS
  function handleSumClick() {
    dispatch(
      sum({ firstNumber: firstNumberInput, secondNumber: secondNumberInput })
    );
  }

  function handleSubClick() {
    dispatch(
      sub({ firstNumber: firstNumberInput, secondNumber: secondNumberInput })
    );
  }

  function handleMultClick() {
    dispatch(
      mul({ firstNumber: firstNumberInput, secondNumber: secondNumberInput })
    );
  }

  function handleDivClick() {
    dispatch(
      div({ firstNumber: firstNumberInput, secondNumber: secondNumberInput })
    );
  }

  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          background: "teal",
        }}
      >
        {/* FIRST INPUT */}
        <label>First Number</label>
        <input
          value={firstNumberInput}
          onChange={(e) => setFirstNumberInput(e.target.value)}
        />

        {/* SECOND INPUT */}
        <label>Second Number</label>
        <input
          value={secondNumberInput}
          onChange={(e) => setSecondNumberInput(e.target.value)}
        />

        <button onClick={handleSumClick}>sum</button>

        <button onClick={handleSubClick}>subtract</button>

        <button onClick={handleMultClick}>multiply</button>

        <button onClick={handleDivClick}>divide</button>

        <hr />

        <h2>{x}</h2>
      </div>
    </div>
  );
}

export default App;
