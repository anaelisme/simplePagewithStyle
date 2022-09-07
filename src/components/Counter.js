import { usePrevious } from "../features/usePrevious";
import { useState } from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div style={{ color: themeColor, fontSize: themeColor, textAlign: themeColor }}>
      <hr />
      <p> previous count: {prevCount} </p>
      <p>current count: {count} </p>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <spacer> </spacer>
      <button onClick={() => setCount(0)}>reset</button>
      <hr />
    </div>
  );
};
export default Counter;
