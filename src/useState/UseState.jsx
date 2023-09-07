import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  console.log("rendered");
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        You clicked {count} times
      </button>
    </div>
  );
};

export default UseState;
