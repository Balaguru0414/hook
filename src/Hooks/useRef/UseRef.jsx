import React, { useRef } from "react";

const UseRef = () => {
  const colors = ["blue", "red", "green", "yellow", "pink"];
  const para = useRef();
  const ColorChange = () => {
    const random = Math.floor(Math.random() * colors.length);
    para.current.style.color = colors[random];
    console.log(para);
    console.log(para.current);
  };

  return (
    <>
      <p ref={para}>Hello World</p>
      <button onClick={ColorChange}>change Color</button>
    </>
  );
};

export default UseRef;
