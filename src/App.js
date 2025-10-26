import { useState } from "react";

function App() {
  return <Counter />;
}

export default App;

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const modDate = `${day}.${month}.${year}`;

  function handleStepMinus() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <div className="container">
      <div>
        <button onClick={() => handleStepMinus()}> - </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}> + </button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>
      <p>
        {count === 0
          ? `today is `
          : `${count < 0 ? count * -1 : count}
        ${count === 1 || count === -1 ? " day " : " days "}
        ${count >= 0 ? "from today is" : " ago was"} `}
        {modDate}
      </p>
    </div>
  );
}
