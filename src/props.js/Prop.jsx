import React from "react";
import Prop2 from "./Prop2";

const Prop = () => {
  const name = "Bala";
  const age = 22;
  return (
    <>
      <h1>Hello World</h1>
      <Prop2 name={name} age={age} />
      <Prop2 name="kishore" age="23" />
    </>
  );
};

export default Prop;
