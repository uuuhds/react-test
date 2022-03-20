import React, { useImperativeHandle, useRef, forwardRef } from "react";

interface ForwardProps {
  click: (str: string) => void;
}

const Son: React.ForwardRefRenderFunction<ForwardProps, any> = (props, ref) => {
  const click = (who: string = "son") => {
    console.log(`${who} click son`);
  };
  useImperativeHandle(ref, () => ({
    click,
  }));
  return (
    <div>
      <h2>Son</h2>
      <button onClick={() => click()}>Click Son Method</button>
    </div>
  );
};

const ForwardSon = forwardRef(Son);

function Parent() {
  const ref = useRef<ForwardProps>(null);
  return (
    <div className="">
      <h1 className="text-red-200 text-2xl">Parent</h1>
      <button onClick={() => ref.current?.click("Parent")}>Parent Click</button>
      <ForwardSon ref={ref} />
    </div>
  );
}

export default Parent;
