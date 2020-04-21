import { hot } from "react-hot-loader/root";
import React from "react";

const App = () => {
  const [count, add] = React.useState(0);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => add(count + 1)}>click me</button>
    </>
  );
};

export default hot(App);
