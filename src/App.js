import { hot } from "react-hot-loader/root";
import React from "react";
import css from "./index.module.scss";
import image from "./image.png";

const App = () => {
  const [count, add] = React.useState(0);
  return (
    <>
      <div className={css.count}>{count}</div>
      <img src={image} alt="image" />
      <div>hello</div>
      <button onClick={() => add(count + 2)}>click me</button>
    </>
  );
};

export default hot(App);
