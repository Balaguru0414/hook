import { useReducer } from "react";



const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return (state = 0);
    default:
      throw new Error();
  }
    // if (action.type === "increment") return state + 1;
    // if (action.type === "decrement") return state - 1;
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>useReducer Hook</h1>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducer;