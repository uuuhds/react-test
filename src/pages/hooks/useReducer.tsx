import { useReducer } from "react";

function init(initialCount: number) {
  return { count: initialCount };
}

interface State {
  count: number;
}

interface Action {
  type: "increment" | "decrement" | "reset";
  payload?: number;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      const payload = action.payload as number;
      return init(payload);
    default:
      throw new Error();
  }
}

export default function Counter({ initialCount }: { initialCount: number }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
