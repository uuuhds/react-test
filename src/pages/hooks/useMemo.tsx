import React, { useCallback, useMemo, useState } from "react";

interface Product {
  value: number;
}

const TotalCount = React.memo(function ({ value }: { value: number }) {
  console.log("Total Count render");
  return <div>{value}</div>;
});

function Memo() {
  console.log("parent render");
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const addProduct = useCallback(() => {
    products.push({ value: Math.floor(Math.random() * 100) });
    setProducts([...products]);
  }, [products]);
  const totalCount = useMemo(() => {
    console.log("calculate");
    return products.reduce((pre, cur) => pre + cur.value, 0);
  }, [products]);
  // const totalCount = products.reduce((pre, cur) => pre + cur.value, 0);
  return (
    <div>
      <p>
        useMemo包裹的内容会被缓存起来，如果没有被useMemo包裹，则每次函数执行时都会被重新执行
      </p>
      <TotalCount value={totalCount} />
      <button onClick={addProduct}>Add Product</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
    </div>
  );
}

export default Memo;
