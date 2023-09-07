import React, { createContext, useContext, useState } from "react";

const usercontext = createContext();
const UseContext = () => {
  const [name, setName] = useState("react");
  return (
    <usercontext.Provider value={name}>
      <h1>react useContext</h1>
      <p>Value is:{name}</p>
      <button onClick={() => setName("NodeJs")}>click</button>
      <Component1 />
    </usercontext.Provider>
  );
};

function Component1() {
  return (
    <>
      <h3>component1</h3>
      <Component2 />
    </>
  );
}
function Component2() {
  return (
    <>
      <h3>component2</h3>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(usercontext);
  return (
    <>
      <h3>component1</h3>
      <p>{user}</p>
    </>
  );
}

export default UseContext;
