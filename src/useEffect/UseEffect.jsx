import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("rendered");
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <button onClick={() => setValue(value + 1)}>Add Value</button>
      <p>Count is :{count}</p>
      <p>Value is :{value}</p>
    </>
  );
};

export default UseEffect;
