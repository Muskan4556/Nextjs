"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>Clicked: {counter}</div>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-red-600 p-2 rounded-md hover:bg-red-500 "
      >
        Click Me
      </button>
    </>
  );
};
export default Counter;
