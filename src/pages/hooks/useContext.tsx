import React from "react";
import {
  createContext,
  Dispatch,
  useCallback,
  useContext,
  useReducer,
} from "react";

interface State {
  count: number;
}

interface Action {
  type: "increment" | "decrement" | "reset";
  payload?: number;
}

const StateContext = createContext<[State, Dispatch<Action>]>([
  { count: 0 },
  (value) => {},
]);

const useStateContext = () => useContext(StateContext);

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Count() {
  const [{ count }, dispatch] = useStateContext();
  const increment = useCallback(() => {
    console.log("do");
    dispatch({ type: "increment" });
  }, [dispatch]);
  return (
    <div>
      Count: {count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

const Hello = React.memo(function () {
  return <div>Hello</div>;
});

export default function Context() {
  return (
    <StateContext.Provider value={useReducer(reducer, { count: 0 })}>
      <Hello />
      <h2>Hellow</h2>
      <Count />
    </StateContext.Provider>
  );
}
