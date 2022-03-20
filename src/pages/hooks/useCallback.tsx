import React, { useState, useCallback } from "react";

// const Son = React.memo(
//   ({ click, name }: { click: () => void; name: string }) => {
//     console.log(`${name} render`);
//     return <div onClick={click}>Son</div>;
//   }
// );

class Son extends React.PureComponent<
  { click: () => void; name: string },
  any
> {
  render() {
    const { name, click } = this.props;
    console.log(`${name} render`);
    return <div onClick={click}>Son</div>;
  }
}

function CallBack() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const click = () => {
    setCount(count + 1);
  };
  const click2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);
  return (
    <div>
      <h2>No Callback</h2>
      <Son click={click} name="son1" />
      <h2>Callback</h2>
      <Son click={click2} name="son2" />
    </div>
  );
}

export default CallBack;
