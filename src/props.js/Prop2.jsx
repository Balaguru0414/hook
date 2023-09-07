import React from "react";

const Prop2 = (props) => {
  const { name, age } = props;
  return (
    <>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
    </>
  );
};

export default Prop2;
