import React, { useState } from "react";

function StatePage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count ++</button>
    </div>
  );
}

export default StatePage;
