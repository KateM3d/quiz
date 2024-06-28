import { useReducer, useState } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "inc") return Number(state + 1);
  if (action.type === "dec") return Number(state - 1);
  if (action.type === "setCount") return Number(action.payload);
};

const DateCounter = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = () => {
    dispatch({ type: "dec" });
  };

  const inc = () => {
    dispatch({ type: "inc" });
  };

  const defineCount = (e) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = (e) => {
    setStep(Number(e.target.value));
  };

  const reset = () => {
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
export default DateCounter;
