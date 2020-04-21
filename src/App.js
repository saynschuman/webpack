import { hot } from "react-hot-loader/root";
import React from "react";
import css from "./index.module.scss";

const App = () => {
  const [count, add] = React.useState(0);
  return (
    <>
      <div className={css.count}>{count}</div>
      <div>hello</div>
      <button onClick={() => add(count + 2)}>click me</button>
    </>
  );
};

export default hot(App);
// export default App;
