import { useState } from "react";
import BetterButton from "../componets/BetterButton";

function ButtonCounter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);
//   const [decriment, setDecriment] = useState(0);

  const increment = () => {
    const next = count + 1;
    setCount(next);
      setHistory((history) => [...history, next]);
      return next;
    };

  const decriment
    = () => {
        setCount((count) => {
        const next = count - 1;
        setHistory((prevhistory) => [...prevhistory, next]);
        return next;
        });
    };

  const reset = () => {
    setCount(0);
    setHistory([0]);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <BetterButton onClick={increment}>Increment</BetterButton>
        <BetterButton onClick={decriment}>Decrement</BetterButton>
      <BetterButton onClick={reset}>Reset</BetterButton>
      <p>History: {history.join(", ")}</p>
    </div>
  );
};

export default ButtonCounter;